import { useEffect, useRef, useState } from 'react';

export const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4';

const MAX_CAPTURE_WIDTH = 960;
// Frames are kept in memory as bitmaps; phones get a smaller cap to stay within RAM budgets.
const MOBILE_CAPTURE_WIDTH = 540;
const FPS = 30;

type Props = { src?: string };

/**
 * Plays the video once while snapshotting every decoded frame to offscreen canvases,
 * then swaps to a <canvas> that ping-pongs through the frames (forward → reverse) forever.
 */
export default function BoomerangVideoBg({ src = HERO_VIDEO_URL }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const [ready, setReady] = useState(false);

  // Phase 1: capture.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const frames: HTMLCanvasElement[] = [];
    const maxWidth = window.matchMedia('(max-width: 767px)').matches ? MOBILE_CAPTURE_WIDTH : MAX_CAPTURE_WIDTH;
    const hasVFC = 'requestVideoFrameCallback' in HTMLVideoElement.prototype;
    let capturing = true;
    let lastTime = -1;
    let rafId = 0;
    let vfcId = 0;

    const grab = () => {
      if (!capturing) return;
      if (video.videoWidth && video.currentTime !== lastTime) {
        lastTime = video.currentTime;
        const w = Math.min(maxWidth, video.videoWidth);
        const h = Math.round((video.videoHeight * w) / video.videoWidth);
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const ctx = c.getContext('2d');
        if (ctx) {
          try {
            ctx.drawImage(video, 0, 0, w, h);
            frames.push(c);
          } catch {
            // Tainted canvas (missing CORS) — stop capturing and fall back to native looping.
            capturing = false;
            video.loop = true;
            return;
          }
        }
      }
      schedule();
    };

    const schedule = () => {
      if (!capturing) return;
      if (hasVFC) vfcId = video.requestVideoFrameCallback(grab);
      else rafId = requestAnimationFrame(grab);
    };

    const stop = () => {
      capturing = false;
      if (hasVFC && vfcId) video.cancelVideoFrameCallback(vfcId);
      if (rafId) cancelAnimationFrame(rafId);
    };

    const onPlay = () => schedule();
    const onEnded = () => {
      stop();
      if (frames.length < 2) {
        video.loop = true;
        void video.play().catch(() => {});
        return;
      }
      framesRef.current = frames;
      setReady(true);
    };

    video.addEventListener('play', onPlay, { once: true });
    video.addEventListener('ended', onEnded);
    void video.play().catch(() => {});

    return () => {
      stop();
      video.removeEventListener('play', onPlay);
      video.removeEventListener('ended', onEnded);
    };
  }, [src]);

  // Phase 2: boomerang playback on canvas at 30fps.
  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const frames = framesRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || frames.length < 2) return;

    canvas.width = frames[0].width;
    canvas.height = frames[0].height;

    const interval = 1000 / FPS;
    let index = 0;
    let direction = 1;
    let last = 0;
    let rafId = 0;
    let visible = true;

    const tick = (t: number) => {
      rafId = requestAnimationFrame(tick);
      if (!visible || t - last < interval) return;
      last = t;
      ctx.drawImage(frames[index], 0, 0);
      if (index === frames.length - 1) direction = -1;
      else if (index === 0) direction = 1;
      index += direction;
    };
    rafId = requestAnimationFrame(tick);

    // Don't burn frames while the hero is scrolled out of view.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, [ready]);

  return (
    <div className="absolute inset-0 z-0 scale-[1.15] origin-top overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="w-full h-full object-cover object-top"
        style={{ display: ready ? 'none' : undefined }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover object-top"
        style={{ display: ready ? undefined : 'none' }}
      />
    </div>
  );
}

export type ModelKey = 'g1' | 'g2' | 'g3' | 'g4' | 'curtain' | 'cooler';

export type SwitchModel = {
  key: ModelKey;
  code: string;
  name: string;
  short: string;
  description: string;
  terminals: string[];
  /** Channel labels in the same order as PANEL_ICONS[key] (left→right, top→bottom). */
  channels: { label: string; terminal: string }[];
  /** Buttons that behave like radio options (only one active at a time). */
  exclusive?: number[];
};

export const MODELS: SwitchModel[] = [
  {
    key: 'g1',
    code: 'LXSW101',
    name: 'کلید هوشمند تک‌پل',
    short: 'تک‌پل',
    description: 'یک کانال مستقل برای روشنایی اصلی اتاق؛ ساده‌ترین نقطهٔ شروع برای هوشمندسازی.',
    terminals: ['L1', 'L', 'N'],
    channels: [{ label: 'روشنایی اصلی', terminal: 'L1' }],
  },
  {
    key: 'g2',
    code: 'LXSW102',
    name: 'کلید هوشمند دوپل',
    short: 'دوپل',
    description: 'دو مدار روشنایی مستقل روی یک پنل شیشه‌ای؛ مناسب پذیرایی و آشپزخانه.',
    terminals: ['L2', 'L1', 'L', 'N'],
    channels: [
      { label: 'چراغ‌های سقفی', terminal: 'L2' },
      { label: 'لوستر', terminal: 'L1' },
    ],
  },
  {
    key: 'g3',
    code: 'LXSW103',
    name: 'کلید هوشمند سه‌پل',
    short: 'سه‌پل',
    description: 'سه کانال برای لایه‌بندی نور: لوستر، هالوژن و نور مخفی، از یک نقطه.',
    terminals: ['L3', 'L2', 'L1', 'L', 'N'],
    channels: [
      { label: 'نور مخفی', terminal: 'L3' },
      { label: 'هالوژن', terminal: 'L2' },
      { label: 'لوستر', terminal: 'L1' },
    ],
  },
  {
    key: 'g4',
    code: 'LXSW104',
    name: 'کلید هوشمند چهارپل',
    short: 'چهارپل',
    description: 'چهار مدار مستقل برای فضاهای بزرگ، لابی و فضاهای اداری.',
    terminals: ['L3', 'L2', 'L1', 'L0', 'L', 'N'],
    channels: [
      { label: 'لوستر', terminal: 'L3' },
      { label: 'هالوژن', terminal: 'L2' },
      { label: 'نور مخفی', terminal: 'L1' },
      { label: 'راهرو', terminal: 'L0' },
    ],
  },
  {
    key: 'curtain',
    code: 'LXSW105',
    name: 'کلید هوشمند پرده',
    short: 'پرده',
    description: 'باز، توقف و بسته‌شدن پردهٔ برقی با یک لمس یا از روی گوشی.',
    terminals: ['Close', 'Open', 'L', 'N'],
    channels: [
      { label: 'باز شدن', terminal: 'Open' },
      { label: 'توقف', terminal: '—' },
      { label: 'بسته شدن', terminal: 'Close' },
    ],
    exclusive: [0, 1, 2],
  },
  {
    key: 'cooler',
    code: 'LXSW106',
    name: 'کلید هوشمند کولر',
    short: 'کولر',
    description: 'کنترل پمپ آب و دور کند/تند کولر آبی؛ بدون کلید مکانیکی و سیم‌کشی اضافه.',
    terminals: ['Fan H', 'Fan L', 'Pump', 'L', 'N'],
    channels: [
      { label: 'پمپ آب', terminal: 'Pump' },
      { label: 'دور کند', terminal: 'Fan L' },
      { label: 'دور تند', terminal: 'Fan H' },
    ],
    exclusive: [1, 2],
  },
];

export const SPECS: { label: string; value: string }[] = [
  { label: 'ولتاژ ورودی', value: '220V · 50Hz' },
  { label: 'توان خروجی هر پل', value: '2200W / gang' },
  { label: 'ارتباط بی‌سیم', value: 'Wi‑Fi · IEEE 802.11 b/g/n · 2.4GHz' },
  { label: 'دمای کاری', value: '0 ~ 40 °C' },
  { label: 'سری محصول', value: 'Spot Smart Switch · LXSW' },
  { label: 'ساخت', value: 'Made in Iran' },
];

const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
export const toFa = (v: string | number) => String(v).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);

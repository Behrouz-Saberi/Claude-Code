import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Specs from './components/Specs';
import Install from './components/Install';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <Specs />
        <Install />
      </main>
      <Contact />
    </div>
  );
}

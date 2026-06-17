import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Guarantee from './components/Guarantee';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f7fbff] to-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Guarantee />
        <Testimonials />
        <Contact />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

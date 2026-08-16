import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ImpactBar from './components/sections/ImpactBar';
import Services from './components/sections/Services';
import Highlight from './components/sections/Highlight';
import BeforeAfter from './components/sections/BeforeAfter';
import Projects from './components/sections/Projects';
import WhyUs from './components/sections/WhyUs';
import Process from './components/sections/Process';
import CTABanner from './components/sections/CTABanner';
import Testimonials from './components/sections/Testimonials';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImpactBar />
        <Services />
        <Highlight />
        <BeforeAfter />
        <Projects />
        <WhyUs />
        <Process />
        <CTABanner />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

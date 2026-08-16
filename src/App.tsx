import Header      from './components/layout/Header';
import Footer      from './components/layout/Footer';
import Hero        from './components/sections/Hero';
import Stats       from './components/sections/Stats';
import About       from './components/sections/About';
import Services    from './components/sections/Services';
import BeforeAfter from './components/sections/BeforeAfter';
import Gallery     from './components/sections/Gallery';
import Differentials from './components/sections/Differentials';
import Process     from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import CTAMid      from './components/sections/CTAMid';
import ContactForm from './components/sections/ContactForm';
import FAQ         from './components/sections/FAQ';
import CTAFinal    from './components/sections/CTAFinal';
import WhatsAppButton from './components/ui/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <BeforeAfter />
        <Gallery />
        <Differentials />
        <Process />
        <Testimonials />
        <CTAMid />
        <ContactForm />
        <FAQ />
        <CTAFinal />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

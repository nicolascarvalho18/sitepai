import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HighlightFacade from './components/sections/HighlightFacade';
import BeforeAfter from './components/sections/BeforeAfter';
import About from './components/sections/About';
import Differentials from './components/sections/Differentials';
import Portfolio from './components/sections/Portfolio';
import CTABanner from './components/sections/CTABanner';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <HighlightFacade />
        <BeforeAfter />
        <About />
        <Differentials />
        <Portfolio />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

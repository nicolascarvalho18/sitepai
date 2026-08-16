import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import ServicesIntro from './components/sections/ServicesIntro';
import BeforeAfterImpact from './components/sections/BeforeAfterImpact';
import ServicesDeepDive from './components/sections/ServicesDeepDive';
import QuickContactModal from './components/sections/QuickContactModal';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesIntro />
        <BeforeAfterImpact />
        <ServicesDeepDive />
        <QuickContactModal />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

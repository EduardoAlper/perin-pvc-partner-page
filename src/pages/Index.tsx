import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { EleganciaSection } from '@/components/EleganciaSection';
import { TecnologiaSection } from '@/components/TecnologiaSection';
import { BeneficiosSection } from '@/components/BeneficiosSection';
import { InformacoesSection } from '@/components/InformacoesSection';
import { B2BSection } from '@/components/B2BSection';
import { ContatoSection } from '@/components/ContatoSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EleganciaSection />
        <TecnologiaSection />
        <BeneficiosSection />
        <InformacoesSection />
        <B2BSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

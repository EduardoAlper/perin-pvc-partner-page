import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, 
  Store, 
  Warehouse, 
  HardHat, 
  Users,
  CheckCircle,
  FileText,
  Palette,
  Headphones,
  MapPin
} from 'lucide-react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const personas = [
  {
    icon: Building2,
    title: 'Distribuidor/Atacadista',
    description: 'Condições especiais para grandes volumes e frete otimizado.',
  },
  {
    icon: Store,
    title: 'Lojas de Materiais',
    description: 'Margem competitiva e produto com alto giro de estoque.',
  },
  {
    icon: Warehouse,
    title: 'Depósitos',
    description: 'Preços de fábrica para estoque próprio e revenda regional.',
  },
  {
    icon: HardHat,
    title: 'Arquitetos e Engenheiros',
    description: 'Especificação técnica e suporte para projetos corporativos.',
  },
  {
    icon: Users,
    title: 'Representantes',
    description: 'Região exclusiva, comissões atrativas e suporte comercial.',
  },
];

const partnerBenefits = [
  { icon: FileText, text: 'Catálogo B2B completo' },
  { icon: Palette, text: 'Tabela comercial atualizada' },
  { icon: Palette, text: 'Materiais de PDV e marketing' },
  { icon: Headphones, text: 'Suporte técnico e comercial' },
  { icon: MapPin, text: 'Possibilidade de território exclusivo (representantes)' },
];

export const B2BSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="b2b" className="py-24 bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4 font-display">
            B2B
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Condições únicas para B2B:{' '}
            <span className="text-primary">revendedores, distribuidores e representantes</span>
          </h2>
          <p className="text-lg text-perin-300 leading-relaxed">
            Parceria sólida com quem quer crescer junto. Escolha seu perfil e descubra as vantagens.
          </p>
        </motion.div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-perin-800/50 backdrop-blur-sm border border-perin-700 rounded-2xl p-6 hover:bg-perin-800 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <persona.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg text-perin-50 mb-2">
                {persona.title}
              </h3>
              <p className="text-sm text-perin-400">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-perin-800/30 backdrop-blur-sm border border-perin-700 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-display font-bold text-2xl text-perin-50 mb-8 text-center">
            O que você recebe como parceiro
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-perin-200">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => handleScrollTo('#contato')}
              className="group"
            >
              Quero ser parceiro Perin
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

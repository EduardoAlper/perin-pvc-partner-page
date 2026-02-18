import { motion } from 'framer-motion';
import { ArrowRight, Factory, Calendar, Package, Users } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from '@/assets/divisoria-pvc-aplicacao.jpg';
import { WHATSAPP_FULL_URL } from '@/lib/constants';

const badges = [
  { icon: Calendar, text: 'Desde 1999' },
  { icon: Factory, text: 'Fabricação própria' },
  { icon: Package, text: 'Linha completa' },
  { icon: Users, text: 'Atendimento B2B' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Divisórias em PVC Perin Plásticos em ambiente corporativo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-perin-900/95 via-perin-900/80 to-perin-900/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-perin-100/10 backdrop-blur-sm border border-perin-100/20 rounded-full px-4 py-2"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-perin-100">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-perin-50 leading-tight mb-6"
          >
            Divisórias em PVC para{' '}
            <span className="text-primary">Revenda e Distribuição</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-perin-300 mb-10 leading-relaxed max-w-2xl"
          >
            Para distribuidores, lojas de materiais e depósitos que precisam de
            fornecedor confiável, condições competitivas e prazos consistentes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="group"
            >
              <a href={WHATSAPP_FULL_URL} target="_blank" rel="noopener noreferrer">
                Solicitar Tabela B2B e Catálogo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              asChild
            >
              <a href={WHATSAPP_FULL_URL} target="_blank" rel="noopener noreferrer">
                Quero ser Representante
              </a>
            </Button>
          </motion.div>

          {/* B2B Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-perin-800/50 backdrop-blur-sm border border-perin-700 rounded-lg px-4 py-3"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-perin-300">
              <strong className="text-perin-100">Atenção:</strong> Se você é consumidor final, procure um revendedor. Esta página é exclusiva para parceiros B2B.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-perin-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

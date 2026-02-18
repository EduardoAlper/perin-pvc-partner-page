import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Droplets, 
  Wrench, 
  SprayCan, 
  Thermometer, 
  Leaf, 
  Award 
} from 'lucide-react';
import profileImage from '@/assets/divisorias-header.png';

const features = [
  {
    icon: Shield,
    title: 'Resistência a Impactos',
    description: 'Material robusto que suporta o uso intensivo do dia a dia sem deformações.',
  },
  {
    icon: Droplets,
    title: 'Impermeável',
    description: '100% impermeável, ideal para ambientes úmidos como banheiros e cozinhas.',
  },
  {
    icon: Wrench,
    title: 'Instalação Simplificada',
    description: 'Sistema de encaixe macho/fêmea que acelera a montagem e reduz custos.',
  },
  {
    icon: Thermometer,
    title: 'Isolamento Térmico/Acústico',
    description: 'Proporciona conforto ambiental com isolamento eficiente.',
  },
  {
    icon: Leaf,
    title: 'Sustentável',
    description: 'Material reciclável, menor impacto ambiental.',
  },
  {
    icon: Award,
    title: 'Garantia Perin Plásticos',
    description: 'Fabricação própria com controle de qualidade e garantia de fábrica.',
  },
];

export const TecnologiaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tecnologia" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 font-display">
              Tecnologia
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Divisórias leves, resistentes e{' '}
              <span className="text-primary">fáceis de instalar</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Nossa linha de divisórias utiliza tecnologia avançada em PVC para facilitar a instalação, reduzir custos de obra e garantir durabilidade em projetos corporativos.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-perin transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-perin-lg">
              <img
                src={profileImage}
                alt="Divisórias PVC Perin Plásticos"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-orange"
            >
              <p className="font-display font-bold text-3xl">26+</p>
              <p className="text-sm opacity-90">anos no mercado</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

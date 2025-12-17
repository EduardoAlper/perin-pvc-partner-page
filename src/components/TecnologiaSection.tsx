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
import profileImage from '@/assets/pvc-profile-detail.jpg';

const features = [
  {
    icon: Shield,
    title: 'Resistência a Impactos',
    description: 'Material de alta durabilidade que suporta uso intenso sem deformações.',
  },
  {
    icon: Droplets,
    title: 'Resistente à Umidade',
    description: '100% impermeável, ideal para ambientes úmidos e limpeza com água.',
  },
  {
    icon: Wrench,
    title: 'Instalação Simplificada',
    description: 'Sistema de encaixe macho/fêmea que acelera a montagem.',
  },
  {
    icon: SprayCan,
    title: 'Limpeza Fácil',
    description: 'Superfície lisa que não acumula sujeira. Basta um pano úmido.',
  },
  {
    icon: Thermometer,
    title: 'Isolamento Térmico/Acústico',
    description: 'Câmaras de ar internas garantem conforto aos ambientes.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Material 100% reciclável com baixo impacto ambiental.',
  },
  {
    icon: Award,
    title: 'Garantia de Fábrica',
    description: 'Produto com garantia e suporte técnico do fabricante.',
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
              A tecnologia Perin garante produtos com qualidade superior, 
              desenvolvidos para maximizar a durabilidade e simplificar a instalação.
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
                alt="Perfil de encaixe PVC Perin"
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
              <p className="font-display font-bold text-3xl">25+</p>
              <p className="text-sm opacity-90">anos no mercado</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

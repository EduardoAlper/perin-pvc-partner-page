import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, 
  Factory,
  Store,
  Stethoscope,
  GraduationCap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { WHATSAPP_FULL_URL } from '@/lib/constants';

const segments = [
  {
    icon: Factory,
    title: 'Indústrias',
    description: 'Separação de setores, áreas de apoio e ambientes de produção.',
  },
  {
    icon: Building2,
    title: 'Empresas e Escritórios',
    description: 'Salas, áreas administrativas e espaços colaborativos.',
  },
  {
    icon: Store,
    title: 'Comércios e Lojas',
    description: 'Estoque, provador, área de atendimento e suporte.',
  },
  {
    icon: Stethoscope,
    title: 'Clínicas e Saúde',
    description: 'Consultórios, recepções e áreas de atendimento.',
  },
  {
    icon: GraduationCap,
    title: 'Escolas e Institutos',
    description: 'Salas técnicas, laboratórios e áreas de apoio.',
  },
];

const companyBenefits = [
  { text: 'Atendimento direto ao comprador final' },
  { text: 'Orientação para especificação técnica' },
  { text: 'Prazos claros e entrega programada' },
  { text: 'Suporte técnico e comercial especializado' },
  { text: 'Fabricação própria — qualidade garantida' },
];

export const B2BSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            Atendimento direto
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Atendimento direto{' '}
            <span className="text-primary">para sua empresa</span>
          </h2>
          <p className="text-lg text-perin-300 leading-relaxed">
            Fale com a Perin Plásticos e receba orientação para especificação, prazos e melhor solução para o seu ambiente. Atendimento para empresas, indústrias e projetos corporativos.
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-perin-800/50 backdrop-blur-sm border border-perin-700 rounded-2xl p-6 hover:bg-perin-800 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <segment.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg text-perin-50 mb-2">
                {segment.title}
              </h3>
              <p className="text-sm text-perin-400">
                {segment.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-perin-800/30 backdrop-blur-sm border border-perin-700 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-display font-bold text-2xl text-perin-50 mb-8 text-center">
            Por que comprar direto da Perin Plásticos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {companyBenefits.map((benefit, index) => (
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
              asChild
              className="group"
            >
              <a href={WHATSAPP_FULL_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

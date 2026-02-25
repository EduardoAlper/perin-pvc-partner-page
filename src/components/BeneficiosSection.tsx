import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Clock, 
  Droplets, 
  Shield, 
  LayoutGrid, 
  RefreshCw, 
  TrendingDown 
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Instalação rápida e limpa',
    description: 'Menos tempo de obra, sem entulho e sem quebrar paredes.',
  },
  {
    icon: Droplets,
    title: 'Fácil limpeza e baixa manutenção',
    description: 'Superfície lisa, resistente e de fácil higienização no dia a dia.',
  },
  {
    icon: Shield,
    title: 'Resistente à umidade e ao uso intenso',
    description: '100% impermeável, suporta ambientes úmidos e de alto tráfego.',
  },
  {
    icon: LayoutGrid,
    title: 'Organiza setores e otimiza metragem',
    description: 'Divida áreas de forma eficiente e aproveite melhor o espaço disponível.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptável e reconfigurável',
    description: 'Pode ser desmontado e remontado conforme o layout mudar.',
  },
  {
    icon: TrendingDown,
    title: 'Excelente custo-benefício',
    description: 'Menor custo de obra e manutenção reduzida no longo prazo.',
  },
];

export const BeneficiosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="beneficios" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4 font-display">
            Benefícios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Vantagens que fazem diferença{' '}
            <span className="text-primary">no dia a dia da sua empresa</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Praticidade, durabilidade e economia — do projeto à operação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-perin-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent -translate-y-16 translate-x-16 rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

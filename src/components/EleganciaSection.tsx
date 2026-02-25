import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import divisoriaAplicacao from '@/assets/divisoria-pvc-aplicacao.jpg';
import divisoriaProduto from '@/assets/divisoria-pvc-produto.jpg';
import divisoriasHeader from '@/assets/divisorias-header.png';
import portaDivisoria from '@/assets/porta-divisoria.jpg';

const images = [
  { src: divisoriasHeader, alt: 'Divisórias em PVC Perin Plásticos', caption: 'Divisórias PVC' },
  { src: divisoriaAplicacao, alt: 'Divisórias PVC aplicação em ambiente', caption: 'Aplicação em Ambientes' },
  { src: divisoriaProduto, alt: 'Divisória PVC 200x35 Perin Plásticos', caption: 'Perfil Divisória' },
  { src: portaDivisoria, alt: 'Porta PVC Divisória Perin Plásticos', caption: 'Porta Divisória' },
];

export const EleganciaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="elegancia" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4 font-display">
            Organização e praticidade
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ambientes organizados,{' '}
            <span className="text-primary">sem obra pesada</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As divisórias em PVC ajudam você a organizar fluxos, separar áreas e otimizar o espaço sem obra pesada. Uma solução limpa, durável e fácil de manter para ambientes de uso intenso.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-xl bg-muted aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-perin-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-perin-50 font-display font-semibold text-sm">
                  {image.caption}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto"
        >
          Divisórias: uma solução prática e profissional para projetos corporativos, com facilidade na instalação, alta durabilidade e economia no longo prazo.
        </motion.p>
      </div>
    </section>
  );
};

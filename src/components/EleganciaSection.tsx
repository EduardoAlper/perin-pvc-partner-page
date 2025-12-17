import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import clinicImage from '@/assets/clinic-partition.jpg';
import schoolImage from '@/assets/school-partition.jpg';
import coworkingImage from '@/assets/coworking-partition.jpg';
import profileImage from '@/assets/pvc-profile-detail.jpg';

const images = [
  { src: clinicImage, alt: 'Divisórias PVC em clínica médica', caption: 'Clínicas e Consultórios' },
  { src: schoolImage, alt: 'Divisórias PVC em ambiente escolar', caption: 'Escolas e Universidades' },
  { src: coworkingImage, alt: 'Divisórias PVC em coworking', caption: 'Escritórios e Coworkings' },
  { src: profileImage, alt: 'Detalhe do perfil PVC Perin', caption: 'Perfil de Encaixe' },
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
            Elegância
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ambientes bem divididos, obra rápida e{' '}
            <span className="text-primary">manutenção mínima</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As divisórias Perin são o produto certo para quem atende construtoras, 
            clínicas, escolas e escritórios corporativos. Seu cliente ganha ambientes 
            organizados com instalação rápida e você ganha margem e giro de estoque.
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
      </div>
    </section>
  );
};

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="video" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4 font-display">
            Veja na prática
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Divisórias PVC em{' '}
            <span className="text-primary">ação real</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Confira como as divisórias em PVC da Perin Plásticos são aplicadas em ambientes industriais e corporativos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-perin-lg bg-muted aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/Qn3AF5JiH-s?rel=0&modestbranding=1&controls=1"
              title="Divisórias PVC Perin Plásticos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

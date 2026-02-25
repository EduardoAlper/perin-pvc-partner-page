import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_FULL_URL } from '@/lib/constants';

const applications = [
  'Indústrias alimentícias e não alimentícias',
  'Escritórios e áreas administrativas',
  'Clínicas e ambientes de atendimento',
  'Lojas, estoque e áreas de apoio',
  'Escolas e salas técnicas',
  'Restaurantes e cozinhas de apoio',
  'Garagens e áreas internas',
  'Centros de convenções',
  'Academias',
  'Hotéis e pousadas',
  'Estufas agrícolas',
  'E outros ambientes internos',
];

const productInfo = [
  { label: 'Comprimentos disponíveis', value: 'Peças de 6 metros' },
  { label: 'Largura', value: '200mm' },
  { label: 'Peso aproximado', value: '5kg/m²' },
  { label: 'Tipo de encaixe', value: 'Sistema macho/fêmea' },
  { label: 'Impermeabilidade', value: '100% impermeável' },
  { label: 'Embalagem padrão', value: '4 peças por pacote' },
  { label: 'Aplicação', value: 'Áreas internas' },
];

export const InformacoesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="informacoes" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 font-display">
            Informações
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Especificações técnicas e{' '}
            <span className="text-primary">aplicações</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-2xl text-foreground mb-2">
              Indicado para
            </h3>
            <p className="text-muted-foreground mb-6">
              Perfeito para empresas que precisam separar áreas internas com praticidade.
            </p>
            <div className="flex flex-wrap gap-3">
              {applications.map((app, index) => (
                <motion.span
                  key={app}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="inline-flex px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  {app}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Product Info Table */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-2xl text-foreground mb-6">
              Informações do Produto
            </h3>
            <div className="bg-background rounded-2xl overflow-hidden shadow-perin">
              <table className="w-full">
                <tbody>
                  {productInfo.map((info, index) => (
                    <tr
                      key={info.label}
                      className={`${
                        index !== productInfo.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-muted-foreground font-medium">
                        {info.label}
                      </td>
                      <td className="px-6 py-4 text-foreground font-semibold text-right">
                        {info.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Button
                variant="hero"
                size="lg"
                asChild
                className="w-full sm:w-auto group"
              >
                <a href={WHATSAPP_FULL_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

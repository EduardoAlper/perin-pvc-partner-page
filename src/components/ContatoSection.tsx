import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ContactType = 'representante' | 'revendedor' | 'loja' | 'deposito' | 'construtora' | 'outro';

const contactTypes: { value: ContactType; label: string }[] = [
  { value: 'representante', label: 'Representante' },
  { value: 'revendedor', label: 'Revendedor/Distribuidor' },
  { value: 'loja', label: 'Loja de Materiais' },
  { value: 'deposito', label: 'Depósito' },
  { value: 'construtora', label: 'Construtora/Empreiteira' },
  { value: 'outro', label: 'Outro' },
];

const estados = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export const ContatoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    tipo: '' as ContactType | '',
    nome: '',
    empresa: '',
    email: '',
    whatsapp: '',
    cidade: '',
    uf: '',
    // Representante fields
    cidadesAtuacao: '',
    carteira: '',
    cnae: '',
    faturamento: '',
    // Revendedor fields
    capacidadeEstoque: '',
    mixPvc: '',
    canaisVenda: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Formulário enviado com sucesso!',
      description: 'Nossa equipe comercial entrará em contato em breve.',
    });

    setIsSubmitting(false);
    setFormData({
      tipo: '',
      nome: '',
      empresa: '',
      email: '',
      whatsapp: '',
      cidade: '',
      uf: '',
      cidadesAtuacao: '',
      carteira: '',
      cnae: '',
      faturamento: '',
      capacidadeEstoque: '',
      mixPvc: '',
      canaisVenda: '',
    });
  };

  const inputClasses = "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200";
  const labelClasses = "block text-sm font-medium text-foreground mb-2";

  return (
    <section id="contato" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4 font-display">
            Contato
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Fale com nosso{' '}
            <span className="text-primary">time comercial</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Preencha o formulário abaixo e receba contato personalizado da nossa equipe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-perin">
            {/* Contact Type */}
            <div className="mb-6">
              <label className={labelClasses}>Você é: *</label>
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Selecione...</option>
                {contactTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Base Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClasses}>Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Empresa *</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Nome da empresa"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClasses}>E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>WhatsApp *</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className={labelClasses}>Cidade *</label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  required
                  placeholder="Sua cidade"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>UF *</label>
                <select
                  name="uf"
                  value={formData.uf}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="">UF</option>
                  {estados.map(uf => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Conditional Fields - Representante */}
            {formData.tipo === 'representante' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 mb-6 p-4 bg-muted rounded-lg"
              >
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Informações para Representantes
                </h4>
                <div>
                  <label className={labelClasses}>Cidades/Estados que pretende atuar</label>
                  <input
                    type="text"
                    name="cidadesAtuacao"
                    value={formData.cidadesAtuacao}
                    onChange={handleChange}
                    placeholder="Ex: Grande São Paulo, Interior de SP..."
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Já possui carteira de clientes?</label>
                  <input
                    type="text"
                    name="carteira"
                    value={formData.carteira}
                    onChange={handleChange}
                    placeholder="Descreva brevemente..."
                    className={inputClasses}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>CNAE principal</label>
                    <input
                      type="text"
                      name="cnae"
                      value={formData.cnae}
                      onChange={handleChange}
                      placeholder="Ex: 4679-6/99"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Faturamento médio</label>
                    <input
                      type="text"
                      name="faturamento"
                      value={formData.faturamento}
                      onChange={handleChange}
                      placeholder="Ex: R$ 50.000/mês"
                      className={inputClasses}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Conditional Fields - Revendedor/Distribuidor */}
            {(formData.tipo === 'revendedor' || formData.tipo === 'loja' || formData.tipo === 'deposito') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 mb-6 p-4 bg-muted rounded-lg"
              >
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Informações para Revenda/Distribuição
                </h4>
                <div>
                  <label className={labelClasses}>Capacidade de estoque</label>
                  <input
                    type="text"
                    name="capacidadeEstoque"
                    value={formData.capacidadeEstoque}
                    onChange={handleChange}
                    placeholder="Ex: 500m² de área coberta..."
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Já trabalha com PVC? Qual mix?</label>
                  <input
                    type="text"
                    name="mixPvc"
                    value={formData.mixPvc}
                    onChange={handleChange}
                    placeholder="Ex: Forros, réguas..."
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Canais de venda</label>
                  <input
                    type="text"
                    name="canaisVenda"
                    value={formData.canaisVenda}
                    onChange={handleChange}
                    placeholder="Ex: Loja física, e-commerce, televendas..."
                    className={inputClasses}
                  />
                </div>
              </motion.div>
            )}

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar e falar com o Comercial
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

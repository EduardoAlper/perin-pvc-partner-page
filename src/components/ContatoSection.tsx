import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Send, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { PHONE, PHONE_TEL, WHATSAPP_DISPLAY, EMAIL, ADDRESS, ADDRESS_NEIGHBORHOOD } from '@/lib/constants';

type ContactType = 'industria' | 'empresa' | 'comercio' | 'clinica' | 'escola' | 'construtora' | 'outro';

const contactTypes: { value: ContactType; label: string }[] = [
  { value: 'industria', label: 'Indústria' },
  { value: 'empresa', label: 'Empresa / Escritório' },
  { value: 'comercio', label: 'Comércio / Loja' },
  { value: 'clinica', label: 'Clínica / Saúde' },
  { value: 'escola', label: 'Escola / Instituto' },
  { value: 'construtora', label: 'Construtora / Empreiteira' },
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
    mensagem: '',
    cidadesAtuacao: '',
    carteira: '',
    cnae: '',
    faturamento: '',
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

    try {
      // Build email body
      let body = `Novo contato B2B - Divisórias PVC\n\n`;
      body += `Tipo: ${formData.tipo}\n`;
      body += `Nome: ${formData.nome}\n`;
      body += `Empresa: ${formData.empresa}\n`;
      body += `E-mail: ${formData.email}\n`;
      body += `WhatsApp: ${formData.whatsapp}\n`;
      body += `Cidade/UF: ${formData.cidade} - ${formData.uf}\n`;
      if (formData.mensagem) body += `Mensagem: ${formData.mensagem}\n`;

      // Additional info can be appended if needed

      // Send via mailto as fallback (no backend yet)
      const subject = encodeURIComponent(`Contato B2B - ${formData.tipo} - ${formData.empresa}`);
      const mailtoBody = encodeURIComponent(body);
      window.open(`mailto:${EMAIL}?subject=${subject}&body=${mailtoBody}`, '_blank');

      toast({
        title: 'Redirecionando para seu e-mail!',
        description: 'Complete o envio pelo seu cliente de e-mail. Nossa equipe comercial entrará em contato em breve.',
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
        mensagem: '',
        cidadesAtuacao: '',
        carteira: '',
        cnae: '',
        faturamento: '',
        capacidadeEstoque: '',
        mixPvc: '',
        canaisVenda: '',
      });
    } catch {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente ou entre em contato pelo WhatsApp.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    }
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
            Fale com a{' '}
            <span className="text-primary">Perin Plásticos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Preencha o formulário e nossa equipe entrará em contato com orientação para especificação e orçamento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <a href={PHONE_TEL} className="text-muted-foreground hover:text-primary transition-colors">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <a href="https://wa.me/5541984078829" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">{WHATSAPP_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-primary transition-colors">{EMAIL}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-muted-foreground">{ADDRESS}<br />{ADDRESS_NEIGHBORHOOD}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-perin">
              {/* Contact Type */}
              <div className="mb-6">
                <label className={labelClasses}>Segmento da sua empresa: *</label>
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
                  <label className={labelClasses}>Seu nome *</label>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Seu nome completo" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Nome da empresa *</label>
                  <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} required placeholder="Nome da empresa" className={inputClasses} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClasses}>E-mail *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>WhatsApp *</label>
                  <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="(00) 00000-0000" className={inputClasses} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelClasses}>Cidade *</label>
                  <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} required placeholder="Sua cidade" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>UF *</label>
                  <select name="uf" value={formData.uf} onChange={handleChange} required className={inputClasses}>
                    <option value="">UF</option>
                    {estados.map(uf => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mensagem */}
              <div className="mb-6">
                <label className={labelClasses}>Mensagem (opcional)</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem..."
                  rows={3}
                  className={inputClasses}
                />
              </div>

              {/* No conditional fields for buyer-final form */}

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
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
      </div>
    </section>
  );
};

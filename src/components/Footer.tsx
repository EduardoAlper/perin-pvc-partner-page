import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl text-perin-50">PERIN</span>
              <span className="text-primary font-display font-semibold">Plásticos</span>
            </div>
            <p className="text-perin-400 mb-6 max-w-md">
              Desde 1999 fabricando divisórias em PVC com qualidade e compromisso.
              Atendemos revendedores, distribuidores, construtoras e representantes comerciais.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-perin-800 flex items-center justify-center text-perin-400 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-perin-800 flex items-center justify-center text-perin-400 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-perin-800 flex items-center justify-center text-perin-400 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-perin-800 flex items-center justify-center text-perin-400 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg text-perin-50 mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-perin-400">
                  Rua Industrial, 1234<br />
                  Bairro Industrial - SP<br />
                  CEP: 00000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:comercial@perinplasticos.com.br" className="text-perin-400 hover:text-primary transition-colors">
                  comercial@perinplasticos.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-perin-400">
                  <a href="tel:+551100000000" className="hover:text-primary transition-colors block">
                    (11) 0000-0000
                  </a>
                  <a href="tel:+5511900000000" className="hover:text-primary transition-colors block">
                    (11) 90000-0000
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-perin-50 mb-6">Navegação</h4>
            <ul className="space-y-3">
              {['Elegância', 'Tecnologia', 'Benefícios', 'Informações', 'B2B', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-perin-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-perin-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-perin-500 text-center md:text-left">
              © {new Date().getFullYear()} Perin Plásticos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 bg-perin-800/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-xs text-perin-400">
                <strong className="text-perin-300">Atendimento exclusivo B2B.</strong> Não vendemos varejo/consumidor final.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

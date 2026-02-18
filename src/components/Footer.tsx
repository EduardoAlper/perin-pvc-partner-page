import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { PHONE, PHONE_TEL, WHATSAPP_DISPLAY, EMAIL, ADDRESS, ADDRESS_NEIGHBORHOOD, INSTAGRAM_URL, FACEBOOK_URL, SITE_URL } from '@/lib/constants';

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
              Fabricação própria de divisórias em PVC desde 1999. Qualidade, durabilidade e condições especiais para parceiros B2B.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-perin-800 flex items-center justify-center text-perin-400 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-perin-800 flex items-center justify-center text-perin-400 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
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
                  {ADDRESS}<br />
                  {ADDRESS_NEIGHBORHOOD}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${EMAIL}`} className="text-perin-400 hover:text-primary transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-perin-400">
                  <a href={PHONE_TEL} className="hover:text-primary transition-colors block">
                    {PHONE}
                  </a>
                  <a href={`https://wa.me/5541984078829`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">
                    {WHATSAPP_DISPLAY} (WhatsApp)
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-perin-50 mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: SITE_URL },
                { label: 'Sobre Nós', href: `${SITE_URL}/historia/` },
                { label: 'Produtos', href: `${SITE_URL}/produtos/` },
                { label: 'Divisórias', href: `${SITE_URL}/divisorias-em-pvc/` },
                { label: 'Contato', href: `${SITE_URL}/contato/` },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-perin-400 hover:text-primary transition-colors"
                  >
                    {item.label}
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
                <strong className="text-perin-300">Atendimento exclusivo B2B.</strong> Atendemos revendedores, distribuidores, construtoras e representantes. Não vendemos varejo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

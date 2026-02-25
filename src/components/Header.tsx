import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { WHATSAPP_FULL_URL } from '@/lib/constants';
import logoImg from '@/assets/logo-perin.png';

const navItems = [
  { label: 'Organização', href: '#elegancia' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Informações', href: '#informacoes' },
  { label: 'Contato', href: '#contato' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-perin'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="https://perinplasticos.com.br" className="flex items-center">
            <img src={logoImg} alt="Perin Plásticos" className="h-16" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 font-display ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="default"
              size="sm"
              asChild
            >
              <a href={WHATSAPP_FULL_URL} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-3 text-left text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 font-display"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="default" asChild>
                  <a href={WHATSAPP_FULL_URL} target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

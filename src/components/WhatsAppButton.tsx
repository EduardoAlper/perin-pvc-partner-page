import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_FULL_URL } from '@/lib/constants';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_FULL_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142_70%_45%)] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-perin-900 text-perin-50 text-sm font-medium px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Fale com o Comercial
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-perin-900" />
      </div>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-ping opacity-25" />
    </motion.a>
  );
};

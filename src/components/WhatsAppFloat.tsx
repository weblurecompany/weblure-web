import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/34600000000?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina%20web"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#25d366] to-[#1ebc59] text-white flex items-center justify-center shadow-2xl shadow-[#25d366]/40 hover:shadow-[#25d366]/60 transition-shadow duration-300"
    >
      <MessageCircle className="w-7 h-7" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
    </motion.a>
  );
}

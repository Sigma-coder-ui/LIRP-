import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/916367064714?text=Hi!%20I'm%20interested%20in%20LIRP.%20Can%20you%20tell%20me%20more?"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-400 whatsapp-pulse" />
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-surface-900 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap">Chat on WhatsApp</div>
        <div className="w-3 h-3 bg-surface-900 rotate-45 translate-x-[18px] -mt-1.5" />
      </div>
    </motion.a>
  );
}

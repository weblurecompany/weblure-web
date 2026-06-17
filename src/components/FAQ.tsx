import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  { q: '¿Cuánto cuesta?', a: 'Depende del proyecto. Te preparamos un presupuesto claro y sin compromiso en 24 horas.' },
  { q: '¿Cuánto tarda?', a: 'La mayoría de proyectos están listos en 7 días. El plazo exacto depende del alcance.' },
  { q: '¿Necesito tener contenido?', a: 'No. Te orientamos con la estructura y contenido que necesita tu web para funcionar.' },
  { q: '¿Incluye soporte?', a: 'Sí. 30 días de soporte tras la publicación para ajustes, dudas y mejoras.' },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.08 }}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        open ? 'bg-white shadow-lg shadow-primary/8 border-primary/15' : 'bg-white/80 shadow-md shadow-primary/3 border-gray-100'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-primary/3 transition-colors"
      >
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          open ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-md' : 'bg-primary/8 text-primary'
        }`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </div>
        <h3 className="flex-1 font-bold text-text">{faq.q}</h3>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pl-[4.25rem] text-text-soft text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 relative bg-gradient-to-b from-bg-soft to-white">
      <div className="max-w-[700px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary font-bold text-sm rounded-full mb-5 border border-primary/10">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

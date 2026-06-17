import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = (name: string) =>
    `w-full px-4 py-3.5 bg-bg-soft border rounded-xl text-sm text-text placeholder-text-soft/50 transition-all duration-300 outline-none ${
      focused === name ? 'border-primary ring-4 ring-primary/10 bg-white' : 'border-gray-200'
    }`;

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
      </div>

      <div className="max-w-[720px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary font-bold text-sm rounded-full mb-5 border border-primary/10">
            <Send className="w-4 h-4" />
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            Tu presupuesto <span className="gradient-text">en 24h</span>
          </h2>
          <p className="text-text-soft text-base max-w-md mx-auto">
            Cuéntanos qué necesitas y te enviamos una propuesta clara y sin compromiso.
          </p>
        </motion.div>

        {/* Quick contact strip */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="mailto:hola@weblurecompany.com" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-100 shadow-sm text-sm font-semibold text-text-soft hover:text-primary hover:border-primary/20 transition-colors">
            <Mail className="w-4 h-4" /> hola@weblurecompany.com
          </a>
          <a href="tel:+34600000000" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-100 shadow-sm text-sm font-semibold text-text-soft hover:text-primary hover:border-primary/20 transition-colors">
            <Phone className="w-4 h-4" /> +34 600 000 000
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl border border-gray-100 p-7 sm:p-10 shadow-xl shadow-primary/5"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-1.5">
              <label htmlFor="nombre" className="text-sm font-bold text-text">Nombre *</label>
              <input
                type="text" id="nombre" placeholder="Tu nombre" required
                className={inputClass('nombre')}
                onFocus={() => setFocused('nombre')} onBlur={() => setFocused('')}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-bold text-text">Email *</label>
              <input
                type="email" id="email" placeholder="tu@email.com" required
                className={inputClass('email')}
                onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
              />
            </div>
          </div>
          <div className="space-y-1.5 mb-5">
            <label htmlFor="mensaje" className="text-sm font-bold text-text">¿Qué necesitas?</label>
            <textarea
              id="mensaje" rows={4}
              placeholder="Cuéntanos brevemente tu proyecto..."
              className={inputClass('mensaje') + ' resize-y'}
              onFocus={() => setFocused('mensaje')} onBlur={() => setFocused('')}
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full flex items-center justify-center gap-3 px-8 py-4 font-bold text-white rounded-2xl shadow-xl transition-all duration-300 ${
              submitted
                ? 'bg-emerald-500 shadow-emerald-500/25'
                : 'bg-gradient-to-r from-primary to-secondary shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5'
            }`}
          >
            {submitted ? (
              <><CheckCircle2 className="w-5 h-5" /> ¡Enviado! Te respondemos en 24h</>
            ) : (
              <><span>Quiero mi presupuesto</span><ArrowRight className="w-5 h-5" /></>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

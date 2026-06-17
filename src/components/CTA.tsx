import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="relative bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl p-8 sm:p-12 shadow-2xl shadow-primary/20 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-[50px]" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                ¿Listo para tener tu web profesional?
              </h3>
              <p className="text-white/75 text-sm sm:text-base">
                Respondemos en menos de 24 horas. Sin compromiso.
              </p>
            </div>

            <a
              href="#contacto"
              className="group flex-shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-white text-primary font-extrabold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Empezar ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

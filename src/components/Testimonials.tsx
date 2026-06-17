import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'Recibimos consultas todos los días. El cambio en imagen y resultados ha sido enorme.',
    name: 'Juan Pérez',
    role: 'Propietario de gimnasio',
    initials: 'JP',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    quote: 'Nuestros clientes reservan online fácilmente y nos ha ayudado mucho con la organización.',
    name: 'María López',
    role: 'Gerente de restaurante',
    initials: 'ML',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    quote: 'El proceso fue sencillo y el resultado transmite la confianza que necesitábamos.',
    name: 'Carlos Martín',
    role: 'Director de clínica',
    initials: 'CM',
    gradient: 'from-primary to-secondary',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="testimonios" className="py-20 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary font-bold text-sm rounded-full mb-5 border border-primary/10">
            <Star className="w-4 h-4 fill-current" />
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-primary/5 p-8 sm:p-12 min-h-[260px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl font-semibold text-text leading-relaxed mb-8 max-w-xl mx-auto">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {t.initials}
                </div>
                <div className="text-left">
                  <strong className="block text-sm font-extrabold text-primary-dark">{t.name}</strong>
                  <span className="text-text-soft text-xs">{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/5 hover:bg-primary/10 text-primary flex items-center justify-center transition-colors" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/5 hover:bg-primary/10 text-primary flex items-center justify-center transition-colors" aria-label="Siguiente">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-gradient-to-r from-primary to-secondary' : 'w-2 bg-primary/20 hover:bg-primary/40'
              }`}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

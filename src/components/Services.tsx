import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette, ShoppingCart, Search, Gauge, MessageCircle, Smartphone
} from 'lucide-react';

const services = [
  { icon: <Palette className="w-7 h-7" />, title: 'Diseño web', short: 'Webs modernas y profesionales que transmiten confianza.', detail: 'Creamos una web alineada con la imagen de tu negocio. Diseño limpio, moderno y enfocado en que tus visitantes se conviertan en clientes.' },
  { icon: <ShoppingCart className="w-7 h-7" />, title: 'Tienda online', short: 'Ecommerce listo para vender desde el día uno.', detail: 'Montamos tu tienda con pasarela de pago, catálogo de productos y una experiencia de compra optimizada para móvil y escritorio.' },
  { icon: <Search className="w-7 h-7" />, title: 'SEO', short: 'Para que tus clientes te encuentren en Google.', detail: 'Optimizamos la estructura, velocidad y contenido de tu web para posicionarte en los primeros resultados de búsqueda.' },
  { icon: <Gauge className="w-7 h-7" />, title: 'Velocidad', short: 'Webs ultrarrápidas que no pierden visitas.', detail: 'Cada segundo de carga cuenta. Optimizamos rendimiento para lograr puntuaciones de 95+ en Google PageSpeed.' },
  { icon: <MessageCircle className="w-7 h-7" />, title: 'WhatsApp', short: 'Contacto inmediato para más consultas.', detail: 'Integramos botones de WhatsApp estratégicamente para que tus visitantes puedan contactarte en un solo clic.' },
  { icon: <Smartphone className="w-7 h-7" />, title: 'Responsive', short: 'Perfecta en móvil, tablet y ordenador.', detail: 'Más del 70% del tráfico es móvil. Tu web se verá impecable en cualquier pantalla, sin perder funcionalidad.' },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="servicios" className="py-20 relative bg-gradient-to-b from-bg-soft to-white">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary font-bold text-sm rounded-full mb-5 border border-primary/10">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            Lo que <span className="gradient-text">hacemos</span>
          </h2>
          <p className="text-text-soft text-base max-w-lg mx-auto">
            Haz clic en cualquier servicio para saber más.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const isActive = active === i;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                onClick={() => setActive(isActive ? null : i)}
                className={`group relative cursor-pointer rounded-2xl p-6 border transition-all duration-400 overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-br from-primary to-secondary text-white border-transparent shadow-xl shadow-primary/20 scale-[1.02]'
                    : 'bg-white/90 border-gray-100 shadow-md shadow-primary/3 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-gradient-to-br from-primary/10 to-secondary/15 text-primary'
                }`}>
                  {service.icon}
                </div>

                <h3 className={`text-lg font-extrabold mb-1 transition-colors ${isActive ? 'text-white' : 'text-text'}`}>
                  {service.title}
                </h3>

                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.p
                      key="detail"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-white/85 text-sm leading-relaxed"
                    >
                      {service.detail}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="short"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-text-soft text-sm leading-relaxed"
                    >
                      {service.short}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Click hint */}
                <span className={`absolute top-4 right-4 text-xs font-bold transition-opacity ${
                  isActive ? 'opacity-50 text-white' : 'opacity-0 group-hover:opacity-60 text-primary'
                }`}>
                  {isActive ? '✕' : 'Saber más →'}
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

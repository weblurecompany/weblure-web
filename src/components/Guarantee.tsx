import { motion } from 'framer-motion';
import { Clock, RefreshCw, Headphones, Smartphone, BarChart3, Shield } from 'lucide-react';

const items = [
  { icon: <Clock className="w-5 h-5" />, title: 'Lista en 7 días' },
  { icon: <RefreshCw className="w-5 h-5" />, title: 'Cambios incluidos' },
  { icon: <Headphones className="w-5 h-5" />, title: 'Soporte 30 días' },
  { icon: <Smartphone className="w-5 h-5" />, title: '100% responsive' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Enfoque en ventas' },
  { icon: <Shield className="w-5 h-5" />, title: 'Hosting incluido' },
];

export default function Guarantee() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="relative bg-gradient-to-br from-primary-dark via-primary to-accent rounded-3xl p-8 sm:p-12 shadow-2xl shadow-primary/20 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-secondary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">¿Por qué elegirnos?</h3>
            <p className="text-white/65 max-w-md mx-auto text-sm">No solo hacemos webs bonitas — las hacemos para que vendan.</p>
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/18 transition-colors cursor-default"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-white/10 flex items-center justify-center text-secondary mb-3">
                  {item.icon}
                </div>
                <span className="text-white font-bold text-xs">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

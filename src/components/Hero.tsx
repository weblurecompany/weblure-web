import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Users, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const heroPoints = [
  { icon: <Zap className="w-5 h-5" />, title: 'Web profesional', desc: 'Diseño pensado para vender.' },
  { icon: <Users className="w-5 h-5" />, title: 'Más contactos', desc: 'Conversiones desde el día uno.' },
  { icon: <Search className="w-5 h-5" />, title: 'SEO incluido', desc: 'Para que te encuentren en Google.' },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
      </div>
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary font-bold text-sm rounded-full mb-6 border border-primary/10"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Diseño web profesional
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-black leading-[1.05] tracking-tight mb-5">
              Webs que{' '}
              <span className="gradient-text">convierten visitas</span>{' '}
              en clientes
            </h1>

            <p className="text-lg text-text-soft leading-relaxed mb-8 max-w-lg">
              Diseño moderno, rápido y optimizado para que tu negocio crezca online.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                Pedir presupuesto gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#trabajos"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-white text-primary font-bold rounded-2xl border border-primary/15 shadow-lg shadow-primary/5 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                Ver proyectos
              </a>
            </div>

            {/* Hero Points */}
            <div className="grid grid-cols-3 gap-3">
              {heroPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="group text-center bg-white/80 backdrop-blur-sm border border-primary/8 rounded-2xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="w-9 h-9 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <strong className="block text-xs font-extrabold text-primary-dark mb-0.5">{point.title}</strong>
                  <span className="text-text-soft text-xs leading-tight">{point.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - 3D tilt card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 800 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-xl animate-float" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-2xl animate-float-delay" />

              <div className="relative bg-gradient-to-b from-white to-bg-soft border border-primary/10 rounded-3xl p-6 shadow-2xl shadow-primary/10">
                {/* Browser mockup */}
                <div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden shadow-xl mb-5">
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/80 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="bg-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-400 font-medium">www.tunegocio.com</div>
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="h-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/10 w-full animate-shimmer" />
                    <div className="h-4 rounded-full bg-gradient-to-r from-secondary/15 via-primary/20 to-secondary/10 w-3/4 animate-shimmer" style={{ animationDelay: '0.5s' }} />
                    <div className="h-4 rounded-full bg-gradient-to-r from-primary/10 via-secondary/15 to-primary/20 w-1/2 animate-shimmer" style={{ animationDelay: '1s' }} />
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Más contactos', value: 35, suffix: '%' },
                    { label: 'Velocidad', value: 98, suffix: '/100' },
                    { label: 'Clientes', value: 50, suffix: '+' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gradient-to-br from-primary-dark to-primary rounded-xl p-3 text-center text-white">
                      <span className="block text-xl font-black">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </span>
                      <span className="text-white/60 text-[10px] font-semibold">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

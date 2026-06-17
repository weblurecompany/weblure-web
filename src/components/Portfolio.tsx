import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Restaurante La Terraza',
    result: '+35% reservas',
    image: 'https://images.pexels.com/photos/8253285/pexels-photo-8253285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Diseño Web', 'Reservas'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Clínica Dental Sonrisa',
    result: '+60% contactos',
    image: 'https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Rediseño', 'Conversión'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'FitZone Gimnasio',
    result: 'Consultas diarias',
    image: 'https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['WhatsApp', 'Landing'],
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function Portfolio() {
  return (
    <section id="trabajos" className="py-20 relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary font-bold text-sm rounded-full mb-5 border border-primary/10">
            <ExternalLink className="w-4 h-4" />
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            Resultados <span className="gradient-text">reales</span>
          </h2>
          <p className="text-text-soft text-base max-w-lg mx-auto">
            Webs que ya están generando clientes para negocios como el tuyo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer h-80 shadow-lg hover:shadow-2xl hover:shadow-primary/15 transition-shadow duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-50 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                <h3 className="text-xl font-extrabold text-white mb-2">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span className="text-secondary font-bold text-sm">{project.result}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  { icon: <MessageSquare className="w-6 h-6" />, title: 'Hablamos', desc: 'Nos cuentas tu proyecto y definimos juntos qué necesita tu web para conseguir resultados.' },
  { icon: <PenTool className="w-6 h-6" />, title: 'Diseñamos', desc: 'Creamos una propuesta visual adaptada a tu marca y objetivos. Tú la apruebas antes de avanzar.' },
  { icon: <Code2 className="w-6 h-6" />, title: 'Desarrollamos', desc: 'Construimos la web cuidando diseño, velocidad y adaptación a móviles. Incluye revisiones.' },
  { icon: <Rocket className="w-6 h-6" />, title: 'Lanzamos', desc: 'Publicamos tu web y te acompañamos 30 días con soporte para que todo funcione perfecto.' },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="proceso" className="py-20 relative bg-gradient-to-b from-bg-soft to-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 text-primary font-bold text-sm rounded-full mb-5 border border-primary/10">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            4 pasos, <span className="gradient-text">sin complicaciones</span>
          </h2>
        </motion.div>

        {/* Interactive stepper */}
        <div className="relative">
          {/* Progress bar */}
          <div className="flex items-center gap-0 mb-10">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-initial">
                <button
                  onClick={() => setActiveStep(i)}
                  className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400 flex-shrink-0 ${
                    i === activeStep
                      ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/30 scale-110'
                      : i < activeStep
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white border-2 border-gray-200 text-text-soft hover:border-primary/30'
                  }`}
                >
                  {step.icon}
                </button>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-1 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={false}
                      animate={{ width: i < activeStep ? '100%' : '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-primary/5 p-8 sm:p-10"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/20 flex-shrink-0">
                  <span className="text-xl font-black">{activeStep + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-text mb-2">{steps[activeStep].title}</h3>
                  <p className="text-text-soft leading-relaxed">{steps[activeStep].desc}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Step labels */}
          <div className="grid grid-cols-4 mt-4">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`text-center text-xs font-bold transition-colors ${
                  i === activeStep ? 'text-primary' : 'text-text-soft/60 hover:text-text-soft'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

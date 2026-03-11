"use client";

import { motion } from "framer-motion";

export function Design() {
  const fadeLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const fadeRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="design" className="py-24 md:py-32 px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-zinc-950 to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeLeftVariant}
          >
            <h2 className="text-4xl md:text-6xl mb-6 font-bold tracking-wide uppercase">Perfeição Aerodinâmica</h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed font-light">
              A forma segue a função. Cada superfície otimizada no túnel de vento, cada detalhe projetado para máxima pressão descendente e arrasto mínimo.
            </p>
            
            <div className="space-y-8">
              {[
                { num: "01", title: "Carroceria em Fibra de Carbono", desc: "Construção CFRP leve para performance ideal." },
                { num: "02", title: "Asa Traseira Ativa", desc: "Sistema DRS com múltiplas posições para velocidade e estabilidade." },
                { num: "03", title: "Chassis de Corrida", desc: "Plataforma derivada do automobilismo para precisão suprema." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-white/20 group-hover:border-porscheRed group-hover:bg-porscheRed/10 transition-colors duration-300">
                    <span className="text-lg font-bold group-hover:text-porscheRed">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-bold uppercase tracking-wider group-hover:text-porscheRed transition-colors">{item.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeRightVariant}
            className="relative h-[500px] md:h-[700px] overflow-hidden group rounded-lg"
          >
            <div className="absolute inset-0 bg-porscheRed/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 mix-blend-overlay" />
            <img
              src="/images/lateral.jpg"
              alt="Porsche 911 aerodinâmica traseira"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-zinc-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
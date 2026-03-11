"use client";

import { motion } from "framer-motion";

export function Specs() {
  const specs = [
    { label: "Aceleração", value: "0-100 km/h", detail: "2.7 segundos" },
    { label: "Velocidade Máxima", value: "340 km/h", detail: "211 mph" },
    { label: "Potência", value: "520 CV", detail: "386 kW" },
    { label: "Peso", value: "1.435 kg", detail: "3.164 lbs" },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="specs" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-porscheDark via-black to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariant}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-4 font-bold tracking-wide uppercase">Excelência Técnica</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Projetado para as pistas. Refinado para as ruas.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {specs.map((spec, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant}
              className="glow-red text-center border-l border-gray-800 hover:border-porscheRed transition-colors duration-300 pl-4 md:pl-0 md:border-l-0 py-4 group"
            >
              <div className="mb-4 text-gray-500 uppercase tracking-[0.2em] text-xs md:text-sm font-medium group-hover:text-porscheRed transition-colors">
                {spec.label}
              </div>
              <div className="text-4xl md:text-5xl mb-2 font-bold tracking-tight text-white group-hover:text-glow-red transition-all">
                {spec.value}
              </div>
              <div className="text-gray-500 text-sm md:text-base">{spec.detail}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Motor", desc: "Motor boxer de 6 cilindros naturalmente aspirado de 4.0 litros com tecnologia derivada do automobilismo." },
            { title: "Transmissão", desc: "Transmissão PDK de 7 marchas (Porsche Doppelkupplung) com tempos de mudança extremamente curtos." },
            { title: "Aerodinâmica", desc: "Aero dinâmico ativo e asa traseira com sistema DRS para força descendente máxima." }
          ].map((card, i) => (
            <motion.div 
              key={i}
              variants={fadeUpVariant}
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(255,0,0,0.3)" }}
              className="glow-red border border-gray-800 bg-zinc-950 p-8 hover:border-porscheRed transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl mb-4 font-bold tracking-wide uppercase">{card.title}</h3>
              <p className="text-gray-400 text-base font-light leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 via-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Interior() {
  const { t } = useLanguage();

  const fadeLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const fadeRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="interior" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-zinc-950 via-black to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeLeftVariant}
            className="relative h-[500px] md:h-[700px] overflow-hidden order-2 lg:order-1 group"
          >
            <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-[inset_0_0_50px_rgba(255,0,0,0.2)] pointer-events-none" />
            <img
              src="/images/interior/cockpit.jpg"
              alt="Porsche Interior e painel de instrumentos"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeRightVariant}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl mb-6 font-bold tracking-wide uppercase">{t.interior.title}</h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed font-light">
              {t.interior.subtitle}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: t.interior.steeringWheel, desc: t.interior.steeringWheelDesc },
                { title: t.interior.sportChrono, desc: t.interior.sportChronoDesc },
                { title: t.interior.carbonPackage, desc: t.interior.carbonPackageDesc },
                { title: t.interior.bucketSeats, desc: t.interior.bucketSeatsDesc }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, borderColor: "rgba(255,0,0,0.5)", backgroundColor: "rgba(255,0,0,0.05)" }}
                  className="bg-zinc-900/50 p-6 border border-gray-800 transition-all duration-300 cursor-pointer glow-red"
                >
                  <h3 className="text-xl mb-3 font-bold uppercase tracking-wider">{card.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
}
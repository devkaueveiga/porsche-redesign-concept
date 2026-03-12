"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Timeline() {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "1948",
      title: t.timeline["1948title"],
      description: t.timeline["1948desc"],
      image: "/images/timeline/1948.jpg"
    },
    {
      year: "1963",
      title: t.timeline["1963title"],
      description: t.timeline["1963desc"],
      image: "/images/timeline/1963.jpg"
    },
    {
      year: "2019",
      title: t.timeline["2019title"],
      description: t.timeline["2019desc"],
      image: "/images/timeline/2019.jpg"
    },
    {
      year: "FUTURE",
      title: t.timeline.futureTitle,
      description: t.timeline.futureDesc,
      image: "/images/timeline/MISSION X.jpg"
    }
  ];

  return (
    <section id="timeline" className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-wide uppercase">{t.timeline.title}</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">{t.timeline.subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 -translate-x-1/2 hidden md:block" />
          
          {/* Vertical line for mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/20 block md:hidden" />

          <div className="space-y-24 md:space-y-32">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 md:-translate-x-1/2 z-10 hidden md:block" />
                  <div className="absolute left-6 w-3 h-3 bg-white rounded-full -translate-x-1/2 z-10 block md:hidden top-6" />

                  {/* Desktop Content Left */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-1/2 flex flex-col justify-center ${
                      isEven ? "md:pr-16 md:items-end md:text-right" : "md:order-2 md:pl-16 md:items-start md:text-left"
                    } pl-16 md:pl-0`}
                  >
                    <div className="border border-white/20 px-8 py-3 mb-6 inline-block bg-black/50 backdrop-blur-sm">
                      <span className="text-2xl md:text-3xl font-light tracking-widest">{item.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">{item.title}</h3>
                    <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Desktop Image Right/Left */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pl-16" : "md:order-1 md:pr-16"
                    } pl-16 md:pl-0 mt-8 md:mt-0`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden group">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

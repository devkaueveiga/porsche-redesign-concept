"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-24 px-6 md:px-12 border-t border-gray-900 border-opacity-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl md:text-3xl mb-8 font-light tracking-[0.4em]">PORSCHE</div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-6">
              Excelência em engenharia e herança do automobilismo desde 1948.
            </p>
            <p className="text-porscheRed text-xs font-bold uppercase tracking-wider">
              Porsche Redesign Concept — Study project, not affiliated
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 text-sm uppercase tracking-[0.2em] font-bold text-gray-300">
              Modelos
            </h3>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              {['911', 'Taycan', 'Cayenne', 'Panamera'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-porscheRed transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-porscheRed transition-all duration-300 group-hover:w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-sm uppercase tracking-[0.2em] font-bold text-gray-300">
              Serviços
            </h3>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              {['Encontrar um Concessionário', 'Agendar Serviço', 'Porsche Exclusive', 'Motorsport'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-porscheRed transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-porscheRed transition-all duration-300 group-hover:w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 text-sm uppercase tracking-[0.2em] font-bold text-gray-300">
              Conectar
            </h3>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              {['Instagram', 'Facebook', 'YouTube', 'Twitter/X'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-porscheRed transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-porscheRed transition-all duration-300 group-hover:w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-light"
        >
          <div>© 2026 Dr. Ing. h.c. F. Porsche AG. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-porscheRed transition-colors tracking-wide uppercase">Legal</a>
            <a href="#" className="hover:text-porscheRed transition-colors tracking-wide uppercase">Privacidade</a>
            <a href="#" className="hover:text-porscheRed transition-colors tracking-wide uppercase">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
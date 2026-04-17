import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code, ShoppingCart, TrendingUp } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#30D5C8]/10 via-white to-[#30D5C8]/5 pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circle - Top Right */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#30D5C8]/20 to-[#30D5C8]/5 rounded-full blur-2xl"
        />
        
        {/* Medium Circle - Bottom Left */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/15 to-[#30D5C8]/10 rounded-full blur-2xl"
        />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#30D5C8]/10 rounded-3xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-blue-400/10 rounded-2xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#30D5C8]/15 rounded-full"
        />
        
        {/* Dotted Pattern */}
        <div className="absolute top-20 left-20 grid grid-cols-4 gap-4 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="w-2 h-2 bg-[#30D5C8] rounded-full"
            />
          ))}
        </div>
        
        {/* Lines Pattern */}
        <div className="absolute bottom-32 right-40 opacity-10">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <motion.path
              d="M0,60 L120,60"
              stroke="#30D5C8"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.path
              d="M0,80 L120,80"
              stroke="#30D5C8"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
            <motion.path
              d="M0,100 L120,100"
              stroke="#30D5C8"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />
          </svg>
        </div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             translate: ["0px 0px", "20px -20px", "0px 0px"]
           }}
           transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
           className="absolute top-20 right-20 w-96 h-96 bg-[#30D5C8] rounded-full blur-3xl mix-blend-multiply filter" 
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.5, 1],
             translate: ["0px 0px", "-20px 20px", "0px 0px"]
           }}
           transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
           className="absolute top-40 right-60 w-96 h-96 bg-blue-400 rounded-full blur-3xl mix-blend-multiply filter" 
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.3, 1],
             translate: ["0px 0px", "20px 20px", "0px 0px"]
           }}
           transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 4 }}
           className="absolute -bottom-8 right-40 w-96 h-96 bg-[#30D5C8] rounded-full blur-3xl mix-blend-multiply filter" 
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              デジタルの可能性を
            </motion.span>
            <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#30D5C8] to-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              カタチに
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            最先端のテクノロジーと創造性を融合し、<br />
            お客様のビジネスを次のステージへ導きます。
          </motion.p>
        </div>
      </div>
    </section>
  );
};
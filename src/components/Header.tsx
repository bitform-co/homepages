import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImg from '../assets/e8c4ac305a0d5ea5047a86e3d07100471a90c7ab.png';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={logoImg} alt="BitForm Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">BitForm</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-600 hover:text-[#30D5C8] transition-colors">サービス</button>
          <button onClick={() => scrollToSection('works')} className="text-sm font-medium text-slate-600 hover:text-[#30D5C8] transition-colors">実績</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-600 hover:text-[#30D5C8] transition-colors">メンバー</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-600 hover:text-[#30D5C8] transition-colors">お問い合わせ</button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-lg"
        >
          <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-[#30D5C8] text-left">サービス</button>
          <button onClick={() => scrollToSection('works')} className="text-slate-600 hover:text-[#30D5C8] text-left">実績</button>
          <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-[#30D5C8] text-left">メンバー</button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-[#30D5C8] text-left">お問い合わせ</button>
        </motion.div>
      )}
    </header>
  );
};
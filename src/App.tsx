import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Works } from './components/Works';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#30D5C8] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
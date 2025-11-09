import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import VehicleShowcase from './components/VehicleShowcase';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-['Poppins',_'Montserrat',_sans-serif]">
      <Navbar />
      <Hero />
      <section className="bg-[#0a0a0a] py-12" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-bold">Autolounge AG – Wetzikon ZH</h2>
            <p className="mt-3 text-white/80 max-w-3xl">
              Junges, eingespieltes Team aus Wetzikon mit Fokus auf ehrliche Beratung. Wir verbinden Premium-Anspruch mit Bodenständigkeit – vom ersten Gespräch bis zur Übergabe.
            </p>
            <a href="#termin" className="mt-6 inline-flex rounded-full px-6 py-3 bg-[#c20f6a] text-white font-semibold hover:bg-[#d61a76] transition">Jetzt Termin vereinbaren</a>
          </div>
        </div>
      </section>
      <VehicleShowcase />
      <Highlights />
      <Contact />
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Autolounge AG · Zürcherstrasse 71, 8620 Wetzikon ZH</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

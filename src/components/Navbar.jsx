import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-2 select-none">
    {/* Simple custom SVG logo based on brief: "Auto" italic magenta, "LOUNGE" caps white */}
    <svg width="44" height="24" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M15 70 C35 30, 85 30, 120 60 C150 85, 190 85, 205 70" stroke="#c20f6a" strokeWidth="10" strokeLinecap="round"/>
      <circle cx="70" cy="85" r="8" fill="#c20f6a"/>
      <circle cx="165" cy="85" r="8" fill="#c20f6a"/>
    </svg>
    <div className="leading-tight">
      <div className="text-sm tracking-wider italic font-semibold text-[#c20f6a]">Auto</div>
      <div className="text-lg font-extrabold tracking-[0.2em] text-white">LOUNGE</div>
    </div>
  </div>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#fahrzeuge" className="text-white/80 hover:text-white transition-colors">Fahrzeuge</a>
          <a href="#ankauf" className="text-white/80 hover:text-white transition-colors">Ankauf</a>
          <a href="#kontakt" className="text-white/80 hover:text-white transition-colors">Kontakt</a>
        </div>
        <a href="#termin" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#c20f6a] text-white font-semibold shadow-lg shadow-[#c20f6a]/30 hover:shadow-[#c20f6a]/50 transition">
          Jetzt Termin
        </a>
      </nav>
    </header>
  );
}

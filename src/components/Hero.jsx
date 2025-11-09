import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] w-full bg-[#0a0a0a] overflow-hidden">
      {/* 3D car scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex flex-col items-start">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl drop-shadow-xl">
          Fahrzeugkauf auf Augenhöhe – ehrlich, lokal, persönlich.
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl">
          Autolounge AG aus Wetzikon: Premium-Fahrzeuge, transparente Beratung und schnelle Abwicklung.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#fahrzeuge" className="rounded-full px-6 py-3 bg-white text-black font-semibold hover:bg-white/90 transition">
            Fahrzeuge ansehen
          </a>
          <a href="#ankauf" className="rounded-full px-6 py-3 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition">
            Fahrzeug verkaufen
          </a>
        </div>
      </div>
    </section>
  );
}

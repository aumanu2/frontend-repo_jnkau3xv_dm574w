import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just simulate send
    setStatus('Vielen Dank! Wir melden uns in Kürze.');
    e.currentTarget.reset();
  };

  return (
    <section id="kontakt" className="bg-[#0a0a0a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Kontakt aufnehmen</h2>
            <p className="text-white/70 mb-6">Zürcherstrasse 71, 8620 Wetzikon ZH · +41 44 000 00 00 · info@auto-lounge.ch</p>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <iframe title="Wetzikon Map" src="https://www.google.com/maps?q=Z%C3%BCrcherstrasse%2071%2C%208620%20Wetzikon%20ZH&output=embed" className="w-full h-64" loading="lazy" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input required type="text" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c20f6a]" placeholder="Max Muster" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">E-Mail</label>
                <input required type="email" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c20f6a]" placeholder="max@beispiel.ch" />
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Telefon</label>
                <input type="tel" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c20f6a]" placeholder="+41 79 000 00 00" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Betreff</label>
                <input type="text" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c20f6a]" placeholder="Probefahrt / Finanzierung / Allgemein" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Nachricht</label>
              <textarea required rows="4" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c20f6a]" placeholder="Wie können wir helfen?" />
            </div>
            <button type="submit" className="mt-6 w-full rounded-full px-6 py-3 bg-[#c20f6a] text-white font-semibold hover:bg-[#d61a76] transition">Senden</button>
            {status && <p className="mt-3 text-sm text-emerald-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

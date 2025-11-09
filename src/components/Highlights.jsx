import React from 'react';
import { Shield, Gauge, CreditCard, Calendar } from 'lucide-react';

const cards = [
  { icon: CreditCard, title: 'Finanzierung möglich', desc: 'Flexible Raten & transparente Konditionen.' },
  { icon: Gauge, title: 'Probefahrt vereinbaren', desc: 'Einfach Termin wählen – wir bereiten alles vor.' },
  { icon: Shield, title: 'Garantie bis 24 Monate', desc: 'Sicherheit und Schutz für Ihr Fahrzeug.' },
  { icon: Calendar, title: 'Ankauf sofort', desc: 'Direkte Offerte & schnelle Auszahlung.' },
];

export default function Highlights() {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-xl bg-[#c20f6a]/20 text-[#c20f6a] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

// Dummy vehicles (6) as placeholders for AutoScout24 feed integration later
const vehicles = [
  {
    id: 'v1',
    title: 'BMW M4 Competition',
    price: 'CHF 89’900',
    km: '18’500 km',
    year: '2021',
    fuel: 'Benzin',
    img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'v2',
    title: 'Audi RS6 Avant',
    price: 'CHF 119’800',
    km: '24’000 km',
    year: '2020',
    fuel: 'Benzin',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'v3',
    title: 'Porsche 911 Carrera',
    price: 'CHF 139’500',
    km: '12’300 km',
    year: '2019',
    fuel: 'Benzin',
    img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'v4',
    title: 'Mercedes-AMG C63 S',
    price: 'CHF 84’700',
    km: '29’900 km',
    year: '2018',
    fuel: 'Benzin',
    img: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'v5',
    title: 'Tesla Model S Performance',
    price: 'CHF 79’900',
    km: '35’000 km',
    year: '2021',
    fuel: 'Elektrisch',
    img: 'https://images.unsplash.com/photo-1511391038067-8d7073b31df1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'v6',
    title: 'VW Golf R Variant',
    price: 'CHF 46’500',
    km: '22’100 km',
    year: '2022',
    fuel: 'Benzin',
    img: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function VehicleShowcase() {
  return (
    <section id="fahrzeuge" className="bg-[#0a0a0a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Highlight-Fahrzeuge</h2>
            <p className="text-white/70">Direkt aus unserem Bestand – mehr auf Anfrage.</p>
          </div>
          <a href="#kontakt" className="hidden sm:inline-flex rounded-full px-5 py-2 bg-[#c20f6a] text-white font-semibold hover:bg-[#d61a76] transition">Alle Fahrzeuge</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map(v => (
            <article key={v.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={v.img} alt={v.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-1">{v.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-white/70 text-sm">
                  <span>{v.year}</span>
                  <span>•</span>
                  <span>{v.km}</span>
                  <span>•</span>
                  <span>{v.fuel}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white font-bold text-lg">{v.price}</span>
                  <a href="#kontakt" className="text-[#c20f6a] hover:underline">Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

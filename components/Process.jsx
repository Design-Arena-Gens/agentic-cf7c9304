export function Process() {
  const steps = [
    {
      title: "Discovery & Strategia",
      desc: "Workshop mirato su processi, dati e obiettivi. Identifichiamo quick?wins e definamo KPI.",
    },
    {
      title: "Prototipo & Validazione",
      desc: "PoC in 2?4 settimane: misuriamo impatto, iteriamo su UX e accuracy.",
    },
    {
      title: "Implementazione end?to?end",
      desc: "Integrazione con sistemi esistenti, sicurezza, governance e monitoraggio.",
    },
    {
      title: "Crescita & Ottimizzazione",
      desc: "A/B testing continuo, fine?tuning modelli e ampliamento dei casi d'uso.",
    }
  ];
  return (
    <div>
      <h2 className="text-3xl font-semibold md:text-4xl">Un processo pensato per il risultato</h2>
      <p className="mt-3 max-w-3xl text-white/70">Ci muoviamo veloci senza compromettere qualit? e sicurezza. Ownership totale dalla strategia alla produzione.</p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="absolute -top-3 left-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold shadow shadow-brand-500/25">{String(i+1).padStart(2,'0')}</div>
            <div className="mt-2 text-lg font-medium">{s.title}</div>
            <p className="mt-2 text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const items = [
    {
      title: "Dashboard & Data Platform",
      desc: "Metriche in tempo reale, co-pilot decisionali, integrazione dati multi?fonte e analitiche predittive.",
      bullets: ["KPI personalizzati", "Modelli predittivi", "Accessi e ruoli"]
    },
    {
      title: "Automazioni operative",
      desc: "Flussi intelligenti che riducono tempi e errori: dalla lead qualification all'onboarding clienti.",
      bullets: ["RPA + LLM", "Integrazioni API", "Monitoraggio e alerting"]
    },
    {
      title: "Chiamate & Messaggi",
      desc: "Assistenti vocali e chat omnicanale su Twilio/WhatsApp/Web: prenotazioni, supporto, vendite.",
      bullets: ["IVR neurali", "Chat 24/7", "Handover a umano"]
    },
    {
      title: "Marketing & Social",
      desc: "Content generation, adv automation, social scheduling e performance loop con A/B testing.",
      bullets: ["Calendari AI", "Adv dinamiche", "Brand voice"]
    },
    {
      title: "Siti & E?commerce",
      desc: "Siti headless ad alte performance, SEO tecnico e tracciamenti end?to?end per la crescita.",
      bullets: ["Next.js/Vercel", "Headless CMS", "Core Web Vitals"]
    },
    {
      title: "Sicurezza & Governance",
      desc: "Policy, guardrail e audit per modelli generativi. Conformit? GDPR by?design.",
      bullets: ["Data masking", "Safety filters", "Audit trail"]
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold md:text-4xl">Servizi progettati per impattare</h2>
      <p className="mt-3 max-w-3xl text-white/70">Progetti modulari e scalabili: partiamo da quick?wins ad alto ROI e costruiamo la piattaforma AI a prova di futuro.</p>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map(({ title, desc, bullets }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
            <div className="text-lg font-medium">{title}</div>
            <p className="mt-2 text-white/70">{desc}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/75">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" />{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

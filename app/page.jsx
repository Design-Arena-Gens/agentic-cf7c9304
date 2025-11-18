import Link from "next/link";
import { LeadForm } from "../components/LeadForm";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Logos } from "../components/Logos";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { CTA } from "../components/CTA";

export default function Page() {
  return (
    <main>
      <Navbar />
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
                Soluzioni AI end?to?end su misura
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                Costruiamo sistemi di <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Intelligenza Artificiale</span> che fanno crescere il tuo business
              </h1>
              <p className="mt-6 text-white/70 md:text-lg">
                Dalla strategia alla messa in produzione: dashboard, automazioni, gestione chiamate e messaggi, marketing, social e siti. Ci assumiamo la responsabilit? del risultato.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#consulenza" className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-3 font-medium text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400">Prenota consulenza gratuita</a>
                <a href="#servizi" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10">Esplora i servizi</a>
              </div>
              <div className="mt-10">
                <Logos />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-brand-500/20 to-white/5 blur-2xl" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                <video className="aspect-video w-full rounded-lg ring-1 ring-white/10" autoPlay muted loop playsInline>
                  <source src="https://cdn.coverr.co/videos/coverr-a-man-working-on-a-laptop-3135/1080p.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Services />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Process />
        </div>
      </section>

      <section id="consulenza" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Consulenza gratuita: sblocca il potenziale dell'AI</h2>
              <p className="mt-4 text-white/70">
                In 30 minuti analizziamo processi, canali e dati. Proponiamo un piano d'azione concreto con ROI atteso e tempi di implementazione.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>? Audit rapido di opportunit? ad alto impatto</li>
                <li>? Roadmap su misura: da quick?wins a piattaforma</li>
                <li>? Stima investimenti e ritorni</li>
              </ul>
              <div className="mt-8 hidden md:block">
                <CTA />
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

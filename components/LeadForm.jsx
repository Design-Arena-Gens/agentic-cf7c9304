"use client";
import { useState } from "react";

export function LeadForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    data.canali = formData.getAll("canali");

    if (!data.privacy) {
      setStatus({ state: "error", message: "Serve il consenso privacy." });
      return;
    }

    setStatus({ state: "loading", message: "" });
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Errore");
      setStatus({ state: "success", message: "Richiesta inviata. Ti contatteremo a breve." });
      form.reset();
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Errore di invio." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <input type="text" name="honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-white/70">Nome e Cognome</label>
          <input name="nome" required placeholder="Mario Rossi" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/30 focus:border-brand-400" />
        </div>
        <div>
          <label className="text-sm text-white/70">Email</label>
          <input name="email" type="email" required placeholder="mario@azienda.it" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-400" />
        </div>
        <div>
          <label className="text-sm text-white/70">Azienda</label>
          <input name="azienda" required placeholder="Azienda S.p.A." className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-400" />
        </div>
        <div>
          <label className="text-sm text-white/70">Settore</label>
          <input name="settore" placeholder="Retail, Finance, Healthcare?" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-400" />
        </div>
        <div>
          <label className="text-sm text-white/70">Fatturato</label>
          <select name="fatturato" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-400">
            <option value="">Seleziona</option>
            <option> < 1M ?</option>
            <option>1?5M ?</option>
            <option>5?20M ?</option>
            <option>20M+ ?</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-white/70">Tempistiche</label>
          <select name="tempistiche" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-400">
            <option value="">Seleziona</option>
            <option>Immediato</option>
            <option>1?3 mesi</option>
            <option>3?6 mesi</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm text-white/70">Obiettivi principali</label>
        <textarea name="obiettivi" rows={3} placeholder="Es. ridurre tempi supporto, aumentare lead, automatizzare back?office?" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-400" />
      </div>

      <div className="mt-4">
        <label className="text-sm text-white/70">Canali d'interesse</label>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-white/80">
          {[
            "Dashboard", "Automazioni", "Chiamate", "Messaggi", "Marketing", "Social", "Sito Web", "E?commerce"
          ].map((c) => (
            <label key={c} className="inline-flex items-center gap-2">
              <input type="checkbox" name="canali" value={c} className="accent-brand-500" /> {c}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-white/70">Budget indicativo</label>
          <select name="budget" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-400">
            <option value="">Seleziona</option>
            <option>< 10k ?</option>
            <option>10?30k ?</option>
            <option>30?100k ?</option>
            <option>100k+ ?</option>
          </select>
        </div>
      </div>

      <label className="mt-4 inline-flex items-start gap-3 text-sm text-white/70">
        <input type="checkbox" name="privacy" value="true" className="mt-1 accent-brand-500" />
        Dichiaro di aver letto l'informativa privacy e acconsento al trattamento dei dati per essere ricontattato.
      </label>

      <div className="mt-6 flex items-center gap-4">
        <button disabled={status.state === "loading"} className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-3 font-medium text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-400 disabled:opacity-60">
          {status.state === "loading" ? "Invio?" : "Richiedi consulenza"}
        </button>
        {status.state === "error" && <span className="text-sm text-red-400">{status.message}</span>}
        {status.state === "success" && <span className="text-sm text-emerald-400">{status.message}</span>}
      </div>
    </form>
  );
}

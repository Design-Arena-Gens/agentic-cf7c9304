export function Footer() {
  return (
    <footer id="contatti" className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold"><span className="text-brand-400">?</span> Agenzia AI</div>
            <p className="mt-1 text-white/60">Soluzioni AI su misura. ? {new Date().getFullYear()}</p>
          </div>
          <div className="text-sm text-white/60">
            <a href="#" className="underline decoration-white/20 underline-offset-4 hover:decoration-brand-400">Privacy</a>
            <span className="mx-2">?</span>
            <a href="#" className="underline decoration-white/20 underline-offset-4 hover:decoration-brand-400">Termini</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

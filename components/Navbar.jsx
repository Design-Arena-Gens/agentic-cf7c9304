import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          <span className="text-brand-400">?</span> Agenzia AI
        </Link>
        <nav className="hidden items-center gap-6 text-white/80 md:flex">
          <a href="#servizi" className="hover:text-white">Servizi</a>
          <a href="#consulenza" className="hover:text-white">Consulenza</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#contatti" className="rounded-md bg-white/5 px-4 py-2 hover:bg-white/10">Contatti</a>
        </nav>
        <a href="#consulenza" className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow shadow-brand-500/25 transition hover:bg-brand-400 md:hidden">Inizia</a>
      </div>
    </header>
  );
}

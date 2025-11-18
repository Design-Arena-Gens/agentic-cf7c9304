export function CTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-brand-500/20 to-white/5 p-6">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative">
        <div className="text-xl font-semibold">ROI prima di tutto</div>
        <p className="mt-2 max-w-xl text-white/70">
          Restituiamo valore misurabile in settimane, non mesi. Trasformiamo le tue sfide in vantaggio competitivo.
        </p>
      </div>
    </div>
  );
}

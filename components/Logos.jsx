export function Logos() {
  const logos = [
    "OpenAI","HuggingFace","Vercel","AWS","Stripe","Twilio"
  ];
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-5 opacity-60">
      {logos.map((name) => (
        <div key={name} className="text-xs uppercase tracking-widest text-white/60">
          {name}
        </div>
      ))}
    </div>
  );
}

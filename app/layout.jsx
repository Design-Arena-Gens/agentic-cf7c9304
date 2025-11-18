import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://agentic-cf7c9304.vercel.app"),
  title: {
    default: "Agenzia AI d'Avanguardia ? Sistemi su misura per il tuo business",
    template: "%s | Agenzia AI d'Avanguardia"
  },
  description: "Progettiamo sistemi di Intelligenza Artificiale end?to?end: dashboard, automazioni, gestione chiamate e messaggi, marketing, social e siti. Consulenza gratuita.",
  openGraph: {
    title: "Agenzia AI d'Avanguardia",
    description: "Sistemi AI su misura per far crescere il tuo business",
    url: "https://agentic-cf7c9304.vercel.app",
    siteName: "Agenzia AI d'Avanguardia",
    locale: "it_IT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenzia AI d'Avanguardia",
    description: "Sistemi AI su misura per far crescere il tuo business",
    images: []
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="bg-neutral-950 text-white antialiased selection:bg-brand-400 selection:text-white">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(59,91,255,0.25),rgba(0,0,0,0))]" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

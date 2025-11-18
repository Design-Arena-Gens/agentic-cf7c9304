import { NextResponse } from "next/server";

export const runtime = "edge";

function isValidEmail(email) {
  return /.+@.+\..+/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      nome,
      email,
      azienda,
      settore,
      fatturato,
      obiettivi,
      canali = [],
      budget,
      tempistiche,
      privacy,
      honey
    } = body || {};

    if (honey) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!privacy) {
      return NextResponse.json({ ok: false, error: "Consenso privacy obbligatorio" }, { status: 400 });
    }

    if (!nome || !email || !azienda || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Dati mancanti o email non valida" }, { status: 400 });
    }

    const payload = {
      tipo: "lead",
      fonte: "sito",
      timestamp: new Date().toISOString(),
      data: {
        nome,
        email,
        azienda,
        settore,
        fatturato,
        obiettivi,
        canali,
        budget,
        tempistiche
      }
    };

    const webhook = process.env.WEBHOOK_URL;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (e) {
        // ignore webhook errors but continue
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Errore del server" }, { status: 500 });
  }
}

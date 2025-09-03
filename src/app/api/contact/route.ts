import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resendApiKey = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO ?? "contacto@expandasoftware.com";
const CONTACT_FROM = process.env.CONTACT_FROM ?? "Expanda Software <onboarding@resend.dev>";

type Payload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  interest?: string;
  message?: string;
};

function emailHtml(p: Payload) {
  const row = (k: string, v?: string) =>
    v ? `<tr><td style="padding:6px 0;color:#334155"><b>${k}:</b></td><td style="padding:6px 0;color:#0f172a">${v}</td></tr>` : "";
  return `<!doctype html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
  <body style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;padding:16px">
    <h2 style="color:#0E3A8A;margin:0 0 8px">Nueva solicitud de demo</h2>
    <p style="margin:0 0 16px;color:#334155">Datos recibidos desde el formulario de contacto.</p>
    <table style="width:100%;border-collapse:collapse">
      <tbody>
        ${row("Nombre", p.name)}
        ${row("Empresa", p.company)}
        ${row("Email", p.email)}
        ${row("Teléfono", p.phone)}
        ${row("Interés", p.interest)}
        ${row("Mensaje", p.message)}
      </tbody>
    </table>
  </body></html>`;
}

export async function POST(req: Request) {
  try {
    if (!resendApiKey) {
      return NextResponse.json(
        { ok: false, error: "Falta RESEND_API_KEY en .env.local" },
        { status: 500 }
      );
    }
    if (!CONTACT_FROM) {
      return NextResponse.json(
        { ok: false, error: "Falta CONTACT_FROM en .env.local" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Partial<Payload>;
    const { name, company, email, phone, interest, message } = body;

    if (!name || !company || !email) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios: name, company, email" },
        { status: 400 }
      );
    }

    const resend = new Resend(resendApiKey);

    const result = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `Nueva solicitud de demo · ${company}`,
      html: emailHtml({ name, company, email, phone, interest, message }),
      text: `Nueva solicitud de demo
Nombre: ${name}
Empresa: ${company}
Email: ${email}
Teléfono: ${phone ?? ""}
Interés: ${interest ?? ""}
Mensaje: ${message ?? ""}`,
    });

    if (result.error) {
      // Devuelve el mensaje de Resend para depurar
      return NextResponse.json(
        { ok: false, error: result.error.message ?? "Error al enviar con Resend" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Error desconocido";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
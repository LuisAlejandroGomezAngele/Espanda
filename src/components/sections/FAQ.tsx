"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cuáles son los costos del sistema ERP con facturación CFDI?",
    a: "Se cotiza por módulos, usuarios y alcance de implementación. Incluye timbrado CFDI 4.0, soporte y actualizaciones según plan.",
  },
  {
    q: "¿Cuánto tiempo toma la implementación del software de inventarios?",
    a: "Entre 4 y 8 semanas según complejidad, limpieza de datos, número de almacenes y capacitación requerida.",
  },
  {
    q: "¿El sistema POS se integra con otros software empresariales?",
    a: "Sí. Contamos con API e integraciones a contabilidad, e-commerce y pasarelas de pago.",
  },
  {
    q: "¿Cómo garantizan el cumplimiento con la facturación electrónica CFDI?",
    a: "Alineamos catálogos, timbrado y cancelaciones a la normativa del SAT. Auditorías y pruebas en cada versión.",
  },
  {
    q: "¿Ofrecen migración de datos desde nuestro sistema actual?",
    a: "Sí. Hacemos mapeo, limpieza y validación. Definimos cortes y pruebas de carga antes del arranque.",
  },
  {
    q: "¿Qué tipo de soporte técnico brindan para la automatización de procesos?",
    a: "Mesa de ayuda, SLA, documentación y acompañamiento en mejoras y automatizaciones.",
  },
  {
    q: "¿Qué medidas de seguridad implementan para proteger nuestros datos?",
    a: "Cifrado en tránsito y en reposo, control de accesos, respaldos y monitoreo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="container-xl py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-blue">Preguntas Frecuentes</h2>
      <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
        Resolvemos las dudas más comunes sobre nuestros sistemas ERP, facturación CFDI y soluciones para PYMES
      </p>

      <div className="mt-10 max-w-4xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <Item key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-brand-blue">{q}</span>
        <Chevron className={`h-5 w-5 text-brand-orange transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-slate-600">{a}</div>}
    </div>
  );
}

function Chevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
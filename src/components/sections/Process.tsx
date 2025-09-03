// src/components/sections/Process.tsx
export function Process() {
  const steps = [
    {
      t: "Descubrimiento",
      d: "Analizamos tus procesos actuales y necesidades específicas",
      Icon: SearchIcon,
    },
    {
      t: "Propuesta",
      d: "Diseñamos una solución personalizada para tu empresa",
      Icon: DocumentIcon,
    },
    {
      t: "Implementación",
      d: "Configuramos y adaptamos el sistema a tus requerimientos",
      Icon: CogIcon,
    },
    {
      t: "Capacitación",
      d: "Entrenamos a tu equipo para el uso óptimo del sistema",
      Icon: GraduationIcon,
    },
    {
      t: "Soporte",
      d: "Brindamos acompañamiento continuo y soporte técnico",
      Icon: HeadsetIcon,
    },
  ];

  return (
    <section id="proceso" className="bg-slate-50">
      <div className="container-xl py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-blue">
          Cómo Trabajamos
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Nuestro proceso estructurado garantiza una implementación exitosa y un acompañamiento integral
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-5 text-center">
          {steps.map(({ t, d, Icon }) => (
            <div key={t} className="flex flex-col items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-semibold text-brand-blue">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Íconos */
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 2a8 8 0 105.3 14.3l4.7 4.7 1.4-1.4-4.7-4.7A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
    </svg>
  );
}
function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 2h9l5 5v15a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" />
    </svg>
  );
}
function CogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7zm0-13a9.5 9.5 0 00-3.5 18.3V23h7v-2.2A9.5 9.5 0 0012 2.5z" />
    </svg>
  );
}
function GraduationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3L1 9l11 6 9-5.1V17h2V9L12 3zm0 9L3.74 9 12 5l8.26 4L12 12z" />
    </svg>
  );
}
function HeadsetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3a9 9 0 00-9 9v5a3 3 0 003 3h2v-6H6v-2a6 6 0 1112 0v2h-2v6h2a3 3 0 003-3v-5a9 9 0 00-9-9z" />
    </svg>
  );
}
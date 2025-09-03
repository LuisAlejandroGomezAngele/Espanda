// src/components/sections/About.tsx
import Image from "next/image";

export function About() {
  const bullets = [
    {
      t: "Metodología",
      d: "Enfoque estructurado y probado para la implementación exitosa de sistemas empresariales",
      Icon: MethodIcon,
    },
    {
      t: "Soporte",
      d: "Acompañamiento continuo y soporte técnico especializado durante todo el proceso",
      Icon: HeadsetIcon,
    },
    {
      t: "Tiempo de Implementación",
      d: "Implementación estimada de 4–8 semanas dependiendo de la complejidad del proyecto",
      Icon: TimeIcon,
    },
  ];

  return (
    <section id="nosotros" className="container-xl py-20 grid lg:grid-cols-2 gap-12 items-center">
      {/* Texto */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">¿Quiénes somos?</h2>

        <p className="mt-6 text-slate-700">
          Somos una empresa emergente mexicana enfocada en transformación digital para PYMES.
          Combinamos experiencia técnica y acompañamiento humano para que la tecnología trabaje por tu negocio.
        </p>

        <p className="mt-4 text-slate-700">
          Nuestro software es práctico, seguro y escalable, diseñado específicamente para las necesidades
          del mercado mexicano. Nos enfocamos en generar valor real y brindar acompañamiento
          personalizado en cada etapa del proceso.
        </p>

        <ul className="mt-8 space-y-5">
          {bullets.map(({ t, d, Icon }) => (
            <li key={t} className="flex items-start gap-4">
              <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-brand-blue">{t}</p>
                <p className="text-slate-600">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Imagen */}
      <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.12)]">
        <Image
          src="/images/about.jpeg"       // coloca tu imagen aquí
          alt="Equipo de Expanda trabajando"
          width={100}
          height={900}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
    </section>
  );
}

/* Íconos simples */
function MethodIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
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
function TimeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 5h-2v6l5 3 1-1.7-4-2.3V7z" />
    </svg>
  );
}
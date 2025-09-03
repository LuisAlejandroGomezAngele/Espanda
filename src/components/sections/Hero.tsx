import Image from "next/image";

export function Hero() {
  const benefits = [
    { icon: <StarIcon />, text: "Equipo con experiencia en sistemas empresariales" },
    { icon: <LightningIcon />, text: "Implementación guiada" },
    { icon: <ShieldIcon />, text: "Seguridad y confiabilidad garantizadas" },
    { icon: <SupportIcon />, text: "Soporte cercano y personalizado" },
  ];

  return (
    <section id="inicio" className="bg-gradient-to-br from-brand-blue to-brand-blueDark text-white">
      <div className="container-xl py-24 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda */}
        <div>
          <h1 className="text-[44px] leading-[1.1] font-extrabold md:text-6xl">
            Tecnología que
            <br className="hidden md:block" />
            expande tu negocio
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-xl">
            Impulsa tu empresa con un ERP moderno que integra facturación CFDI, inventarios, compras, CxC, CxP y POS.
            Implementación rápida y soporte cercano.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="btn btn-primary rounded-2xl px-5 py-2.5">Solicitar Demo</a>
            <a href="#servicios" className="btn btn-outline rounded-2xl px-5 py-2.5">Ver Servicios</a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {benefits.map(({ icon, text }, index) => (
              <span key={index} className="inline-flex items-center gap-3 text-white/90">
                {icon}
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="relative">
          <div className="rounded-3xl bg-white/8 ring-1 ring-white/15 backdrop-blur-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.25)]">
            <Image
              src="/imageHome.jpeg"
              alt="Expanda ERP"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3 7h7l-5.5 4.5L19 21l-7-4-7 4 2.5-7.5L2 9h7z" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v6l5 3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}
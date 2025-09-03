"use client";
import { useState } from "react";
import Image from "next/image"; 

export function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200/70">
      <div className="container-xl h-16 flex items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-2">
          <Image src="/Expanda_Isotipo.png" alt="Expanda" width={28} height={28} className="h-7 w-7" />
          <span className="font-extrabold tracking-tight text-2xl md:text-3xl">
            <span className="text-brand-orange">Ex</span>
            <span className="text-brand-blue">panda</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(i => (
            <a key={i.label} href={i.href} className="text-sm text-slate-700 hover:text-brand-blue">{i.label}</a>
          ))}
          <a href="#contacto" className="btn btn-primary">Solicitar Demo</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M3 6h18v2H3v-2M3 11h18v2H3v-2M3 16h18v2H3v-2" /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200/70">
          <div className="container-xl py-3 flex flex-col gap-3">
            {nav.map(i => <a key={i.label} href={i.href} className="text-sm" onClick={() => setOpen(false)}>{i.label}</a>)}
            <a href="#contacto" className="btn btn-primary w-full">Solicitar Demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
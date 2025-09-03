"use client";
import { useState } from "react";
import Swal from "sweetalert2";

type FormState = { name: string; company: string; email: string; phone: string; interest: string; message: string };

type FieldProps = {
  label: string;
  name: keyof FormState;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};
const Field = ({ label, name, type = "text", required, placeholder, value, onChange }: FieldProps) => (
  <div>
    <label className="block text-sm mb-1" htmlFor={String(name)}>{label}</label>
    <input
      id={String(name)}
      name={String(name)}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-3 py-2"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      autoComplete="on"
    />
  </div>
);

export function Contact() {
  const [state, setState] = useState<{loading:boolean; ok:boolean|null; error?:string}>({loading:false, ok:null});
  const [form, setForm] = useState<FormState>({ name:"", company:"", email:"", phone:"", interest:"", message:"" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({loading:true, ok:null});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setState({ loading: false, ok: true });
        Swal.fire({
          icon: "success",
          title: "Solicitud enviada",
          text: "Gracias por tu interés. Nos comunicaremos contigo pronto.",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#0E3A8A"
        });
        setForm({ name:"", company:"", email:"", phone:"", interest:"", message:"" });
      } else {
        setState({ loading: false, ok: false, error: data.error });
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error desconocido";
      setState({ loading:false, ok:false, error: message });
    }
  }

  return (
    <section id="contacto" className="bg-slate-50">
      <div className="container-xl py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-brand-blue">Contacto</h2>
        <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">
          ¿Listo para transformar tu negocio? Contáctanos para una demo personalizada de nuestras soluciones ERP
        </p>

        <div className="mt-10 grid lg:grid-cols-[1fr_420px] gap-12">
          {/* Formulario */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="text-xl font-bold text-brand-blue">Solicita tu Demo Gratuita</h3>
            <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Nombre completo *" name="name" required value={form.name} onChange={(v)=>setForm({ ...form, name: v })} />
              <Field label="Empresa *" name="company" required value={form.company} onChange={(v)=>setForm({ ...form, company: v })} />
              <Field label="Email *" type="email" name="email" required value={form.email} onChange={(v)=>setForm({ ...form, email: v })} />
              <Field label="Teléfono" name="phone" value={form.phone} onChange={(v)=>setForm({ ...form, phone: v })} />

              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">Área de interés</label>
                <select
                  className="w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={form.interest}
                  onChange={(e)=>setForm({...form, interest:e.target.value})}
                >
                  <option value="">Selecciona una opción</option>
                  <option>ERP con Facturación</option>
                  <option>Inventarios y Compras</option>
                  <option>Cuentas por Cobrar / Pagar</option>
                  <option>POS</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm mb-1">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2"
                  value={form.message}
                  onChange={(e)=>setForm({...form, message:e.target.value})}
                  placeholder="Cuéntanos sobre tus necesidades específicas..."
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  className="btn btn-primary w-full rounded-2xl px-5 py-2.5 disabled:opacity-60"
                  type="submit"
                  disabled={state.loading}
                >
                  {state.loading ? "Enviando..." : "Enviar Solicitud"}
                </button>

                {state.ok && (
                  <p className="mt-2 text-center text-sm text-emerald-600">
                    Solicitud enviada. Te contactaremos.
                  </p>
                )}
                {state.ok === false && (
                  <p className="mt-2 text-center text-sm text-red-600">
                    Error: {state.error ?? "No se pudo enviar. Intenta de nuevo."}
                  </p>
                )}
              </div>

              <p className="sm:col-span-2 mt-2 text-xs text-slate-500">
                Al enviar este formulario, aceptas nuestro Aviso de Privacidad.
              </p>
            </form>
          </div>

          {/* Aside */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h4 className="font-bold text-brand-blue">Información de Contacto</h4>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-center gap-3">📧 contacto@expandasoftware.com</li>
                <li className="flex items-center gap-3">📞 +52 33 37 22 59 09</li>
                <li className="flex items-center gap-3">📍 Ciudad de México, México</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 shadow-card bg-brand-blue text-white">
              <h4 className="font-bold">¿Por qué elegir Expanda?</h4>
              <ul className="mt-3 space-y-2 text-white/90">
                <li>• Especialistas en PYMES mexicanas</li>
                <li>• Cumplimiento total con CFDI</li>
                <li>• Implementación rápida y segura</li>
                <li>• Soporte técnico especializado</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
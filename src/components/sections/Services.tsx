import { FileTextIcon, BoxesIcon, CreditCardIcon, ShoppingBagIcon, CogIcon } from "./icons";

const services = [
  {
    icon: <FileTextIcon />,
    title: "ERP con Facturación Electrónica",
    desc: "Administra tu operación y cumple con CFDI. Reportes en tiempo real y control financiero.",
    points: ["Timbrado CFDI", "Administración integral", "Reportes en tiempo real"],
  },
  {
    icon: <BoxesIcon />,
    title: "Inventarios y Compras",
    desc: "Visibilidad por almacén, mínimos y reorden. Órdenes a proveedores sin fricción.",
    points: ["Control por almacén", "Puntos de reorden", "Gestión de proveedores"],
  },
  {
    icon: <CreditCardIcon />,
    title: "Cuentas por Cobrar (CxC) y Cuentas por Pagar (CxP)",
    desc: "Controla flujos, fechas de pago y conciliaciones. Reduce morosidad y errores.",
    points: ["Control de flujos", "Conciliaciones", "Reducción de morosidad"],
  },
  {
    icon: <ShoppingBagIcon />,
    title: "POS (Punto de Venta)",
    desc: "Ventas ágiles, cortes de caja y conexión directa con inventarios y precios.",
    points: ["Ventas rápidas", "Cortes de caja", "Integración con inventarios"],
  },
  {
    icon: <CogIcon />,
    title: "Documentación y Automatización de Procesos",
    desc: "Documentamos y automatizamos tus flujos para escalar con menos costos.",
    points: ["Mapeo de procesos", "Estandarización", "Automatización"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="container-xl py-20">
      <h2 className="text-3xl font-extrabold text-center">Nuestros Servicios</h2>
      <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
        Soluciones integrales de ERP, facturación electrónica CFDI, inventarios, compras, CxC, CxP y POS para PYMES en México
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(s => (
          <div key={s.title} className="card flex flex-col">
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 text-brand-blue">{s.icon}</span>
              <h3 className="font-bold text-lg">{s.title}</h3>
            </div>
            <p className="mt-3 text-slate-600">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {s.points.map(p => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
const posts = [
    { tag:"ERP", date:"03 Sep, 2025", title:"¿Qué es un ERP y por qué tu PYME lo necesita?", href:"#"},
    { tag:"CFDI", date:"28 Ago, 2025", title:"5 claves para implementar CFDI 4.0", href:"#"},
    { tag:"Inventarios", date:"15 Ago, 2025", title:"Cómo optimizar inventarios", href:"#"},
  ];
  export function BlogGrid(){
    return (
      <section id="blog" className="container-xl py-20">
        <h2 className="text-3xl font-extrabold text-center">Nuestro Blog</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map(p=>(
            <a key={p.title} href={p.href} className="card hover:shadow-lg transition">
              <div className="aspect-[4/3] rounded-xl bg-slate-100 mb-4" />
              <span className="text-sm text-brand-orange">{p.tag}</span>
              <h3 className="mt-2 font-bold">{p.title}</h3>
              <div className="mt-3 text-sm text-slate-500">{p.date}</div>
            </a>
          ))}
        </div>
      </section>
    );
  }
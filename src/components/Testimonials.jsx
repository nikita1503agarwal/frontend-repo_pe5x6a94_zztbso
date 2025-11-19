export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Testimonios</h2>
          <p className="mt-3 text-white/60 max-w-2xl">Próximamente: historias de clientes y resultados medibles.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 mb-4" />
              <p className="text-white/70">“Muy pronto añadiremos testimonios reales de proyectos de alto impacto.”</p>
              <p className="mt-3 text-sm text-white/50">Cliente {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

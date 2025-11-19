const steps = [
  { title: "Descubrimiento", desc: "Entendemos tu negocio, objetivos y oportunidades." },
  { title: "Diseño", desc: "Arquitectura, flujos y plan de implementación." },
  { title: "Implementación", desc: "Desarrollo, integraciones y despliegue controlado." },
  { title: "Optimización", desc: "Medición, mejoras y evolución continua." },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Nuestro proceso</h2>
          <p className="mt-3 text-white/60 max-w-2xl">Método claro para ir de la idea a la operación funcionando.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="absolute -top-3 -right-3 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-900 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/20">{i + 1}</div>
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

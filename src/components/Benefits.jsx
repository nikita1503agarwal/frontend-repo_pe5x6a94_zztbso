const benefits = [
  {
    title: "Ahorro de tiempo",
    desc: "Reduce horas en tareas repetitivas y enfoca a tu equipo en lo estratégico.",
  },
  {
    title: "Menos errores",
    desc: "Procesos robustos y auditables, con calidad consistente.",
  },
  {
    title: "Más ventas",
    desc: "Mejor captación y conversión con sistemas inteligentes.",
  },
  {
    title: "Operación inteligente",
    desc: "Datos, automatización y IA alineados a objetivos reales.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Beneficios para tu empresa</h2>
          <p className="mt-3 text-white/60 max-w-2xl">Resultados medibles. Impacto directo en eficiencia, ingresos y experiencia del cliente.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
              <h3 className="text-lg font-medium text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

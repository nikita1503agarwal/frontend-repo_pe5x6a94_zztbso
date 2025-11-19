const cases = [
  {
    title: "Captación automática de leads inmobiliarios",
    desc: "Sistema que detecta nuevas publicaciones, filtra por criterios y dispara secuencias de contacto multicanal.",
  },
  {
    title: "Chatbots que responden 24/7",
    desc: "Asistentes con contexto de negocio que resuelven dudas, capturan datos y derivan oportunidades.",
  },
  {
    title: "Integración con CRM + WhatsApp",
    desc: "Sincronización de oportunidades, tareas y mensajes en tiempo real para no perder ningún lead.",
  },
  {
    title: "Lead nurturing automatizado",
    desc: "Secuencias personalizadas que aumentan conversión y ticket promedio.",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Casos y ejemplos</h2>
          <p className="mt-3 text-white/60 max-w-2xl">Proyectos reales que muestran cómo escalamos operaciones con IA y automatización.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-xl">
              <h3 className="text-lg font-medium text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

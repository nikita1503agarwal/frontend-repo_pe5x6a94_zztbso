import { Bot, Workflow, PlugZap, Sparkles } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Automatización de procesos",
    desc: "Mapeamos y automatizamos flujos críticos para reducir tiempos y errores.",
  },
  {
    icon: Bot,
    title: "Chatbots inteligentes",
    desc: "Atención al cliente 24/7 con chatbots entrenados en tu negocio.",
  },
  {
    icon: PlugZap,
    title: "Integraciones a medida",
    desc: "CRM, WhatsApp, Idealista y más. Conectamos tus herramientas clave.",
  },
  {
    icon: Sparkles,
    title: "Lead nurturing",
    desc: "Secuencias inteligentes para convertir más y mejor.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Qué hacemos</h2>
          <p className="mt-3 text-white/60 max-w-2xl">Soluciones reales de IA y automatización para acelerar tu crecimiento y operar con precisión.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 to-blue-600/10" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-900 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur-xl">
          <div className="absolute inset-0 opacity-40" style={{background: 'radial-gradient(800px 200px at 10% 10%, rgba(34,211,238,0.35), transparent 40%), radial-gradient(800px 200px at 90% 90%, rgba(59,130,246,0.35), transparent 40%)'}} />
          <div className="relative p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Agenda una llamada y recibe un diagnóstico gratuito</h2>
                <p className="mt-4 text-white/70">Analizamos tu situación y proponemos un plan claro para automatizar y escalar tu operación con IA.</p>
              </div>
              <div className="flex md:justify-end">
                <a href="mailto:contacto@arnanz.ai" className="inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition">Agendar una consulta gratuita</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

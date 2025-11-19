export default function About() {
  return (
    <section id="sobre" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Sobre Arnanz AI</h2>
            <p className="mt-5 text-white/70 leading-relaxed">
              Somos una agencia especializada en inteligencia artificial aplicada al negocio. Combinamos estrategia, diseño de procesos y desarrollo para crear sistemas que generan impacto real: más eficiencia, menos coste y más crecimiento.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Trabajamos con empresas que buscan un socio técnico de confianza. Hablamos claro, ejecutamos con excelencia y medimos cada resultado.
            </p>
          </div>
          <div className="relative h-72 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03]">
            <div className="absolute inset-0" style={{background: 'radial-gradient(1200px 400px at 10% 10%, rgba(34,211,238,0.25), transparent 40%), radial-gradient(1200px 400px at 90% 90%, rgba(59,130,246,0.25), transparent 40%)'}} />
            <div className="absolute inset-0 backdrop-blur-xl" />
            <div className="absolute inset-0 border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

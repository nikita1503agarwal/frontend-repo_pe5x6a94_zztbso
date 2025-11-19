import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.45),transparent_60%)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              IA aplicada al negocio
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Automatizamos y escalamos tu empresa con IA de alto nivel
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Diseñamos sistemas inteligentes que eliminan tareas repetitivas, captan más clientes y optimizan tus procesos con precisión.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition">Agendar una consulta gratuita</a>
              <a href="#casos" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-white/10 text-white/80 hover:text-white hover:bg-white/5">Ver casos</a>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[560px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

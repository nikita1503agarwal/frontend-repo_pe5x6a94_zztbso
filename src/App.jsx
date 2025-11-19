import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Cases from './components/Cases';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(34,211,238,0.12),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Cases />
        <Process />
        <About />
        <Testimonials />
        <CTA />
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/50">
          <p>© {new Date().getFullYear()} Arnanz AI. Todos los derechos reservados.</p>
          <div className="text-sm">Construido con precisión y diseño minimalista.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

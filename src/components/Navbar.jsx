import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#casos", label: "Casos" },
    { href: "#proceso", label: "Proceso" },
    { href: "#sobre", label: "Sobre" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10">
          <div className="flex items-center justify-between py-4 px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,0.35)]" />
              <span className="text-white/90 font-semibold tracking-tight">Arnanz <span className="text-cyan-400">AI</span></span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="ml-2 inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-shadow"
              >
                Agendar consulta
              </a>
            </nav>

            <button
              className="md:hidden text-white/80"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-6">
              <nav className="flex flex-col gap-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20"
                >
                  Agendar consulta
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

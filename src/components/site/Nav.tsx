import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import vmLogo from "@/assets/vm-logo.jpg";

const links = [
  { href: "#apropos", label: "À propos" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#services", label: "Services" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
      setScrolled(h.scrollTop > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full transition-[width] duration-150"
          style={{ width: `${progress}%`, background: "linear-gradient(90deg, var(--primary), var(--cyan-glow))" }}
        />
      </div>
      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-2xl border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-white grid place-items-center overflow-hidden ring-1 ring-border shadow-sm">
              <img src={vmLogo} alt="VM Service" className="w-full h-full object-contain p-1" />
            </div>
            <div className="leading-none">
              <span className="block font-display text-lg md:text-xl uppercase tracking-tighter text-foreground">
                VM <span style={{ color: "var(--primary)" }}>SERVICE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Distributeur Agréé Officiel SOBEBRA
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[11px] font-semibold tracking-[0.18em] text-foreground/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="uppercase hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground hover:scale-[1.03] transition-all duration-300 shadow-md"
            style={{ background: "var(--gradient-primary)" }}
          >
            Commander
          </a>

          <button className="md:hidden p-2 text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-2xl">
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg uppercase text-sm tracking-[0.15em] font-semibold hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full px-5 py-3 text-center font-bold uppercase tracking-[0.18em] text-xs text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                Commander sur WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

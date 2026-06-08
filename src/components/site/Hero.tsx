import { useEffect, useState } from "react";
import { MessageCircle, Zap, Truck, ShieldCheck } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const WA_NUMBER = "22900000000";
const WA_TEXT = "Bonjour%20VM%20Service%2C%20je%20souhaite%20commander.";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden selection:bg-primary/20"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background image + gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTruck}
          alt="Distribution VM Service Bénin"
          className="w-full h-full object-cover opacity-25"
          style={{ transform: `translateY(${y * 0.25}px) scale(1.08)` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.98 0.012 250) 0%, oklch(0.98 0.012 250 / 0.85) 45%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, oklch(0.98 0.012 250) 0%, transparent 60%)" }} />
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-40" style={{ background: "var(--cyan-glow)" }} />
      <div className="pointer-events-none absolute bottom-20 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-30" style={{ background: "var(--yellow-accent)" }} />

      {/* Hero content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 pt-32 pb-56 lg:pb-72">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Distributeur Agréé Officiel SOBEBRA · Bénin
          </div>

          <h1 className="font-display uppercase leading-[0.88] tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 text-foreground">
            Distribution<br />
            <span
              className="capitalize text-transparent bg-clip-text"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 700,
                backgroundImage: "linear-gradient(90deg, oklch(0.35 0.18 262), oklch(0.55 0.17 252))",
                filter: "drop-shadow(0 4px 18px oklch(0.42 0.18 260 / 0.35))",
              }}
            >
              agréée
            </span>
            <br />
            de boissons.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
            Gros volume et livraison rapide partout au Bénin.{" "}
            <span className="text-foreground font-medium">Casiers consignés</span> et packs PET pour bars, maquis, hôtels, événements et revendeurs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-7 py-4 md:px-8 md:py-5 font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.02] text-primary-foreground"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 12px 40px oklch(0.42 0.18 260 / 0.40)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Commander sur WhatsApp
            </a>
            <a
              href="#catalogue"
              className="px-7 py-4 md:px-8 md:py-5 font-bold uppercase tracking-wider rounded-xl border border-border bg-white/70 hover:bg-white transition-all backdrop-blur-md text-sm md:text-base text-foreground"
            >
              Catalogue Logistique
            </a>
          </div>
        </div>
      </main>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-border bg-white/60 backdrop-blur-2xl py-8 md:py-10 z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { Icon: Zap, value: "24H", label: "Livraison Express Cotonou", tint: "var(--primary)" },
            { Icon: Truck, value: "500+", label: "Partenaires Actifs", tint: "var(--cyan-glow)" },
            { Icon: ShieldCheck, value: "100%", label: "Certification SOBEBRA", tint: "var(--primary)" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-5 group">
              <div
                className="w-14 h-14 rounded-2xl grid place-items-center transition-all duration-500"
                style={{ background: `color-mix(in oklab, ${s.tint} 12%, transparent)`, color: s.tint }}
              >
                <s.Icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display text-3xl">{s.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

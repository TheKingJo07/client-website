import { MessageCircle, ArrowRight, Boxes, Package } from "lucide-react";
import beer from "@/assets/beer.jpg";
import water from "@/assets/water.jpg";

const blocks = [
  {
    icon: Boxes,
    tag: "Gros volume",
    title: "Casiers de boissons SOBEBRA",
    desc: "Distribution en gros de casiers de bières et boissons consignées. Bouteilles en verre, casiers complets, palettes entières, livrés directement chez vous.",
    img: beer,
    cta: "Commander en gros",
    wa: "Bonjour, je souhaite commander des casiers de boissons SOBEBRA en gros.",
  },
  {
    icon: Package,
    tag: "Gros & détail",
    title: "Packs de boissons plastiques (PET)",
    desc: "Vente en gros et détail de packs de boissons en bouteilles PET : eau, sodas, sucreries (1,5L et autres formats). Packs et cartons disponibles.",
    img: water,
    cta: "Commander maintenant",
    wa: "Bonjour, je souhaite commander des packs de boissons PET.",
  },
];

export function Catalogue() {
  return (
    <section id="catalogue" className="relative py-28 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Nos Produits</div>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Deux formats. <span className="text-gradient">Un seul standard.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Distribution massive de boissons SOBEBRA, du casier consigné au pack PET.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blocks.map((b, i) => (
            <article
              key={b.title}
              className="reveal group relative rounded-[2rem] overflow-hidden bg-card border border-border hover:border-accent/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow-strong)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, oklch(0.18 0.09 264 / 0.9) 100%)" }} />
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[11px] uppercase tracking-[0.2em] font-bold">
                  {b.tag}
                </div>
                <div className="absolute bottom-5 left-5 w-14 h-14 rounded-2xl grid place-items-center" style={{ background: "var(--gradient-cyan)", boxShadow: "var(--shadow-glow)" }}>
                  <b.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight">{b.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.desc}</p>
                <a
                  href={`https://wa.me/22900000000?text=${encodeURIComponent(b.wa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  {b.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-muted-foreground italic">
          Vente en détail disponible selon disponibilité du stock.
        </p>
      </div>
    </section>
  );
}

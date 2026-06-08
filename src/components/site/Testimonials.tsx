import { Star, Quote } from "lucide-react";

const items = [
  { name: "Bar Le Tropical", role: "Cotonou", text: "Livraison ponctuelle, équipe pro. Notre stock ne tombe plus jamais à zéro." },
  { name: "Mariage Adjavon", role: "Calavi", text: "200 invités servis sans rupture. Reprise des invendus le lendemain, parfait." },
  { name: "Hôtel Lagune", role: "Cotonou", text: "Tarifs gros imbattables et facturation claire. Un vrai partenaire." },
  { name: "Maquis Chez Ben", role: "Abomey-Calavi", text: "WhatsApp, paiement, livraison : tout est fluide. Je recommande." },
];

export function Testimonials() {
  return (
    <section className="relative py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Témoignages</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Ils nous font <span className="text-gradient">confiance</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="reveal relative rounded-3xl bg-card border border-border p-7 hover:shadow-[var(--shadow-glow)] transition" style={{ transitionDelay: `${i * 80}ms` }}>
              <Quote className="absolute top-5 right-5 w-8 h-8 text-accent/20" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-[var(--cyan-glow)] text-[var(--cyan-glow)]" />
                ))}
              </div>
              <blockquote className="text-foreground/80 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-display font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

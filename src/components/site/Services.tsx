import { Truck, Boxes, PartyPopper, Headphones } from "lucide-react";

const services = [
  { icon: Truck, title: "Livraison rapide", text: "Cotonou, Calavi & environs en 24h chrono. Flotte dédiée, suivi par téléphone." },
  { icon: Boxes, title: "Gros & détail", text: "Bars, maquis, hôtels, particuliers : tarifs adaptés à chaque volume." },
  { icon: PartyPopper, title: "Événementiel", text: "Mariages, fêtes, concerts : approvisionnement complet et reprise des invendus." },
  { icon: Headphones, title: "Service client WhatsApp", text: "Une équipe joignable 7j/7 pour vos commandes, devis et urgences." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20 -translate-y-1/3 translate-x-1/3" style={{ background: "var(--gradient-cyan)" }} />
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Services</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Une logistique <span className="text-gradient">sans friction</span></h2>
          <p className="mt-4 text-muted-foreground">De la commande au déchargement : tout est pensé pour vous faire gagner du temps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative rounded-3xl border border-border bg-card p-7 hover:-translate-y-2 transition duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-primary)", padding: "1px" }}>
                <div className="w-full h-full rounded-3xl bg-card" />
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl grid place-items-center mb-5 transition group-hover:rotate-6 group-hover:scale-110" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                <div className="mt-6 text-xs font-mono text-muted-foreground/60">0{i + 1} / 04</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

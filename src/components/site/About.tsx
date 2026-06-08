import { CheckCircle2, Clock, MapPin, ShieldCheck } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";

const points = [
  { icon: Clock, title: "Rapidité", text: "Livraison en moins de 24h dans Cotonou et Calavi." },
  { icon: ShieldCheck, title: "Fiabilité", text: "Produits 100% officiels SOBEBRA, traçabilité garantie." },
  { icon: CheckCircle2, title: "Disponibilité", text: "Stock permanent, équipe joignable 7j/7 sur WhatsApp." },
  { icon: MapPin, title: "Couverture", text: "Cotonou, Calavi, Abomey-Calavi & environs (extensible)." },
];

export function About() {
  return (
    <section id="apropos" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl" style={{ background: "var(--gradient-cyan)", opacity: 0.2 }} />
          <img
            src={warehouse}
            alt="Entrepôt de stockage VM Service"
            loading="lazy"
            width={1280}
            height={896}
            className="relative rounded-3xl shadow-[var(--shadow-card)] object-cover w-full h-[520px]"
          />
          <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-5 shadow-[var(--shadow-glow)] border border-border">
            <div className="text-3xl font-display font-bold text-gradient">+10 ans</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">d'expérience terrain</div>
          </div>
        </div>

        <div className="reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Qui sommes-nous ?</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Distributeur agréé officiel <br />
            <span className="text-gradient">SOBEBRA au Bénin</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            VM Service est une entreprise spécialisée dans la distribution de boissons
            et de produits de grande consommation. Distributeur agréé officiel SOBEBRA
            dans notre zone d'activité, nous approvisionnons particuliers, commerçants,
            bars, restaurants, événements et revendeurs avec puissance logistique et
            fiabilité.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p.title} className="group relative rounded-2xl border border-border bg-card p-5 hover:border-accent/50 transition">
                <div className="w-11 h-11 rounded-xl grid place-items-center mb-3 transition group-hover:scale-110" style={{ background: "var(--gradient-primary)" }}>
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="font-display font-bold">{p.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Droplet } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground/70 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg grid place-items-center" style={{ background: "var(--gradient-cyan)" }}>
            <Droplet className="w-4 h-4 text-primary-foreground" fill="currentColor" />
          </div>
          <div className="font-display font-bold text-primary-foreground">VM SERVICE</div>
        </div>
        <div className="text-xs uppercase tracking-wider">© {new Date().getFullYear()} · Distributeur Agréé Officiel SOBEBRA · Tous droits réservés</div>
      </div>
    </footer>
  );
}

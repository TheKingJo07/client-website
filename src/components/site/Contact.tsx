import { Phone, Mail, MapPin, MessageCircle, Send, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const wa = `https://wa.me/22900000000?text=${encodeURIComponent(`Bonjour VM Service, je suis ${name || "..."}. ${msg}`)}`;

  return (
    <section id="contact" className="relative py-28" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div className="reveal text-primary-foreground">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)] font-semibold">Contact</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Commandez <span className="text-gradient">maintenant</span></h2>
          <p className="mt-4 text-white/70 max-w-md">Un message, un appel, et c'est livré. Notre équipe répond en quelques minutes.</p>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn mt-8 inline-flex items-center gap-3 rounded-2xl px-8 py-5 font-bold text-lg text-primary-foreground"
            style={{ background: "var(--gradient-cyan)" }}
          >
            <MessageCircle className="w-6 h-6" />
            Commander sur WhatsApp
          </a>

          <div className="mt-10 space-y-4">
            <a href="tel:+22900000000" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-white/10 group-hover:bg-white/20 transition">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Téléphone</div>
                <div className="font-semibold">+229 00 00 00 00</div>
              </div>
            </a>
            <a href="mailto:contact@sobedis-benin.com" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-white/10 group-hover:bg-white/20 transition">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Email</div>
                <div className="font-semibold">contact@sobedis-benin.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Adresse</div>
                <div className="font-semibold">Cotonou, Bénin</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: MessageCircle, href: wa },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl grid place-items-center border border-white/20 hover:border-[var(--cyan-glow)] hover:shadow-[var(--shadow-glow)] hover:scale-110 transition text-white">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal">
          <form
            onSubmit={(e) => { e.preventDefault(); window.open(wa, "_blank"); }}
            className="rounded-3xl bg-card p-8 shadow-[var(--shadow-card)] border border-border"
          >
            <h3 className="font-display font-bold text-2xl">Envoyez-nous un message</h3>
            <p className="text-sm text-muted-foreground mt-1">Réponse rapide via WhatsApp.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Nom</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" placeholder="Votre nom" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Message</label>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} required rows={5} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-none" placeholder="Je souhaite commander..." />
              </div>
              <button type="submit" className="glow-btn w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                <Send className="w-4 h-4" /> Envoyer
              </button>
            </div>
          </form>

          <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 h-64">
            <iframe
              title="Localisation Cotonou"
              src="https://www.google.com/maps?q=Cotonou,Benin&output=embed"
              className="w-full h-full grayscale-[40%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

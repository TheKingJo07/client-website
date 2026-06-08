import { useState } from "react";
import { X } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";
import delivery from "@/assets/delivery.jpg";
import event from "@/assets/event.jpg";
import truck from "@/assets/hero-truck.jpg";
import beer from "@/assets/beer.jpg";
import soda from "@/assets/soda.jpg";

const imgs = [
  { src: warehouse, h: "row-span-2", label: "Entrepôt" },
  { src: delivery, h: "", label: "Livraison" },
  { src: event, h: "", label: "Événement" },
  { src: truck, h: "col-span-2", label: "Flotte" },
  { src: beer, h: "", label: "Bières" },
  { src: soda, h: "", label: "Sodas" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="galerie" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Galerie</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Le <span className="text-gradient">terrain</span>, en images</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {imgs.map((i, k) => (
            <button
              key={k}
              onClick={() => setOpen(i.src)}
              className={`reveal group relative overflow-hidden rounded-2xl ${i.h}`}
              style={{ transitionDelay: `${k * 60}ms` }}
            >
              <img src={i.src} alt={i.label} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition" />
              <div className="absolute bottom-3 left-3 text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider">{i.label}</div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] bg-primary-deep/95 backdrop-blur-xl grid place-items-center p-6 animate-in fade-in" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground" onClick={() => setOpen(null)}>
            <X className="w-8 h-8" />
          </button>
          <img src={open} alt="" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}

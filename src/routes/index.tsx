import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Catalogue } from "@/components/site/Catalogue";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VM SERVICE BENIN · Distributeur Agréé Officiel SOBEBRA · Cotonou & Calavi" },
      { name: "description", content: "VM Service : distribution et revente de boissons SOBEBRA en gros et détail au Bénin. Bières, sodas, eau minérale livrés à Cotonou, Calavi et environs en 24h." },
      { property: "og:title", content: "VM SERVICE BENIN · Distributeur Agréé Officiel SOBEBRA" },
      { property: "og:description", content: "Bières, sodas, eau minérale SOBEBRA. Livraison rapide, gros & détail, événementiel. Commandez sur WhatsApp." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Catalogue />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}

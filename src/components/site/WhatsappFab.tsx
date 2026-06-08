import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/22900000000?text=Bonjour%20VM%20Service%2C%20je%20souhaite%20commander."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full grid place-items-center text-white hover:scale-110 transition"
      style={{ background: "var(--whatsapp-dark)", animation: "pulse-glow 2s ease-in-out infinite" }}
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  );
}

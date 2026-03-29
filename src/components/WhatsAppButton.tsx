import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/34911432634"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-accent/30 hover:scale-110 transition-transform group"
  >
    <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping" />
    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full" />
  </a>
);

export default WhatsAppButton;

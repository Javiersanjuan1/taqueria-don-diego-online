import heroBg from "@/assets/hero-bg.jpg";
import { UtensilsCrossed, ShoppingBag } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Tacos mexicanos con decoración de papel picado"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-display text-7xl md:text-9xl tracking-tight text-foreground mb-2 drop-shadow-lg">
          TAQUERÍA
        </h1>
        <h2 className="font-display text-5xl md:text-7xl text-primary tracking-wide mb-6 drop-shadow-lg">
          DON DIEGO
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
          Auténtica cocina mexicana en el corazón de Madrid
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:911432634"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            911 43 26 34
          </a>
          <a
            href="https://www.google.com/maps?ftid=0xd42275f5df019e7:0x72bbe1713c0e8090"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 rounded-lg font-body font-semibold text-lg hover:bg-foreground/10 transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

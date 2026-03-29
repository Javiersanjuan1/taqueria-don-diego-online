import heroBg from "@/assets/hero-bg.jpg";
import { ShoppingBag, UtensilsCrossed, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <img
        src={heroBg}
        alt="Tacos mexicanos auténticos con guacamole y cervezas"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="text-primary font-body font-semibold text-sm tracking-wide">
            🌮 Auténtica cocina mexicana en Madrid
          </span>
        </div>

        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-tight text-foreground mb-2 drop-shadow-2xl animate-fade-in-up">
          TAQUERÍA
        </h1>
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-primary tracking-wide mb-6 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          DON DIEGO
        </h2>
        <p className="font-body text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Los mejores tacos mexicanos auténticos de Madrid. Recetas tradicionales, sabor inigualable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#pedidos"
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-body font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
          >
            <ShoppingBag className="w-5 h-5" />
            Pedir Ahora
          </a>
          <a
            href="#carta"
            className="flex items-center gap-2 bg-foreground/10 border border-foreground/20 text-foreground px-8 py-4 rounded-xl font-body font-bold text-lg hover:bg-foreground/20 backdrop-blur-sm transition-all hover:scale-105"
          >
            <UtensilsCrossed className="w-5 h-5" />
            Ver Carta
          </a>
        </div>
      </div>

      <a
        href="#carta"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/50 hover:text-primary transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;

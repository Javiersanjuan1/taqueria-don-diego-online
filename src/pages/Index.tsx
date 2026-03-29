import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSection />

      {/* Separador decorativo */}
      <div className="flex items-center justify-center gap-4 py-8 px-4">
        <span className="h-px flex-1 max-w-[120px] bg-primary/40" />
        <span className="font-display text-xl text-primary tracking-widest">🌮 🌶️ 🥑</span>
        <span className="h-px flex-1 max-w-[120px] bg-primary/40" />
      </div>

      <MenuSection />

      <div id="pedidos">
        <OrderSection />
      </div>

      <LocationSection />

      <footer className="py-10 text-center border-t border-border bg-card">
        <p className="font-display text-2xl text-primary">TAQUERÍA DON DIEGO</p>
        <p className="text-muted-foreground text-sm font-body mt-2">
          Auténtica cocina mexicana en Madrid
        </p>
        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href="tel:911432634"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
          >
            📞 911 43 26 34
          </a>
          <a
            href="https://www.google.com/maps?ftid=0xd42275f5df019e7:0x72bbe1713c0e8090"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
          >
            📍 Ver ubicación
          </a>
        </div>
        <p className="text-muted-foreground/50 text-xs font-body mt-6">
          © {new Date().getFullYear()} Taquería Don Diego. Todos los derechos reservados.
        </p>
      </footer>

      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;

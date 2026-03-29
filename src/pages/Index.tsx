import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import useScrollReveal from "@/hooks/useScrollReveal";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="aztec-border" />
      <MenuSection />
      <div id="pedidos">
        <OrderSection />
      </div>
      <AboutSection />
      <ReviewsSection />
      <LocationSection />

      <footer className="py-12 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-display text-3xl text-primary mb-2">DON DIEGO</p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Auténtica cocina mexicana en el corazón de Madrid. Sabor, tradición y pasión en cada plato.
              </p>
            </div>
            <div>
              <h4 className="font-body font-bold text-foreground text-sm uppercase tracking-wider mb-3">Contacto</h4>
              <div className="space-y-2">
                <a href="tel:911432634" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body">
                  <Phone className="w-4 h-4" /> 911 43 26 34
                </a>
                <a
                  href="https://www.google.com/maps?ftid=0xd42275f5df019e7:0x72bbe1713c0e8090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  <MapPin className="w-4 h-4" /> Madrid, España
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-body font-bold text-foreground text-sm uppercase tracking-wider mb-3">Síguenos</h4>
              <div className="flex gap-3">
                <a href="#" className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="aztec-border mb-6" />
          <p className="text-muted-foreground/50 text-xs font-body text-center">
            © {new Date().getFullYear()} Taquería Don Diego. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;

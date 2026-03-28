import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <div id="pedidos">
        <OrderSection />
      </div>
      <LocationSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-display text-xl text-primary">TAQUERÍA DON DIEGO</p>
        <p className="text-muted-foreground text-sm font-body mt-2">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default Index;

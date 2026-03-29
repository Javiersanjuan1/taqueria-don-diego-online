import { ExternalLink, ShoppingBag, Phone } from "lucide-react";

const OrderSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
            Pedidos
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mt-2">
            PIDE A <span className="text-primary">DOMICILIO</span>
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
            Disfruta de nuestros tacos y platos mexicanos sin salir de casa. ¡Te lo llevamos calentito!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto reveal">
          <a
            href="https://www.ubereats.com/es/store/taqueria-don-diego/OKYRUch0Rvq4vjteD3rMFg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all hover:scale-[1.02]"
          >
            <div className="bg-foreground text-background rounded-xl p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <span className="font-body font-bold text-xl text-foreground">Uber Eats</span>
            <span className="text-muted-foreground text-sm font-body">Pide desde la app</span>
            <span className="flex items-center gap-1 text-primary font-body font-semibold text-sm mt-2">
              Pedir ahora <ExternalLink className="w-4 h-4" />
            </span>
          </a>

          <a
            href="https://www.just-eat.es/restaurants-taqueria-don-diego-madrid/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all hover:scale-[1.02]"
          >
            <div className="bg-primary text-primary-foreground rounded-xl p-3 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <span className="font-body font-bold text-xl text-foreground">Just Eat</span>
            <span className="text-muted-foreground text-sm font-body">Pide desde la web</span>
            <span className="flex items-center gap-1 text-primary font-body font-semibold text-sm mt-2">
              Pedir ahora <ExternalLink className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="text-center mt-10 reveal">
          <p className="text-muted-foreground font-body text-sm mb-3">¿Prefieres llamar?</p>
          <a
            href="tel:911432634"
            className="inline-flex items-center gap-2 bg-muted border border-border text-foreground px-6 py-3 rounded-xl font-body font-bold text-base hover:border-primary/50 transition-all"
          >
            <Phone className="w-5 h-5 text-primary" />
            911 43 26 34
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;

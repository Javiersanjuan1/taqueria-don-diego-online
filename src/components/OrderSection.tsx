import { ExternalLink } from "lucide-react";

const OrderSection = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
          PIDE A <span className="text-primary">DOMICILIO</span>
        </h2>
        <p className="text-muted-foreground font-body mb-10">
          Disfruta de nuestros tacos y platos mexicanos sin salir de casa
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.ubereats.com/es/store/taqueria-don-diego/OKYRUch0Rvq4vjteD3rMFg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            Uber Eats
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href="https://www.just-eat.es/restaurants-taqueria-don-diego-madrid/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            Just Eat
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;

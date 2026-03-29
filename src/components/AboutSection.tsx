import tacosImg from "@/assets/tacos-hero.jpg";
import { Heart, Flame, Users } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Recetas Tradicionales",
    description: "Cada plato sigue recetas auténticas traídas directamente de México.",
  },
  {
    icon: Heart,
    title: "Ingredientes Frescos",
    description: "Seleccionamos los mejores ingredientes cada día para garantizar el sabor.",
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Un lugar donde compartir momentos especiales con la mejor comida.",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
              Sobre nosotros
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-6">
              TRADICIÓN <span className="text-primary">MEXICANA</span>
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
              En Taquería Don Diego llevamos la esencia de la gastronomía mexicana al corazón de Madrid.
              Nuestras recetas son herencia de generaciones, preparadas con la pasión y el amor que solo
              la cocina tradicional puede ofrecer.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
              Desde nuestros tacos al pastor hasta nuestras margaritas artesanales, cada producto
              que servimos refleja nuestro compromiso con la autenticidad y la calidad. Ven y descubre
              por qué somos el rincón mexicano favorito de Madrid.
            </p>

            <div className="grid gap-4">
              {features.map((f, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1} flex items-start gap-4 bg-muted/30 rounded-xl p-4 border border-border/30`}>
                  <div className="bg-primary/15 rounded-lg p-2.5 shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-body font-bold text-foreground text-sm">{f.title}</h4>
                    <p className="text-muted-foreground text-sm mt-0.5">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/30">
              <img
                src={tacosImg}
                alt="Tacos auténticos mexicanos Don Diego"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width={800}
                height={500}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl">
              <p className="font-display text-3xl">+5</p>
              <p className="font-body text-xs font-semibold -mt-1">AÑOS EN MADRID</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    rating: 5,
    text: "Los mejores tacos que he probado fuera de México. El sabor es increíble, las salsas son auténticas. ¡Volveré seguro!",
    date: "Hace 2 semanas",
  },
  {
    name: "Carlos R.",
    rating: 5,
    text: "El alambre Don Diego es espectacular. El servicio genial y el ambiente te transporta a México. 100% recomendado.",
    date: "Hace 1 mes",
  },
  {
    name: "Laura M.",
    rating: 5,
    text: "Las margaritas son las mejores de Madrid, sin duda. La comida riquísima y precios muy justos para la calidad.",
    date: "Hace 3 semanas",
  },
  {
    name: "Javier P.",
    rating: 4,
    text: "Quesadillas y burritos increíbles. Muy auténtico todo. El personal súper amable y la decoración muy chula.",
    date: "Hace 1 mes",
  },
  {
    name: "Ana S.",
    rating: 5,
    text: "He pedido por Uber Eats varias veces y siempre llega perfecto. Los tacos de tinga son adictivos.",
    date: "Hace 2 meses",
  },
  {
    name: "Pablo D.",
    rating: 5,
    text: "Celebramos un cumpleaños aquí y fue genial. La michelada es brutal y los chilaquiles están de muerte.",
    date: "Hace 1 mes",
  },
];

const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-20 px-4 bg-card relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 reveal">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
            Opiniones
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
            NUESTROS <span className="text-secondary">CLIENTES</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-body font-bold text-foreground text-lg">4.8</span>
            <span className="text-muted-foreground font-body text-sm">· +500 reseñas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${Math.min(idx + 1, 4)} bg-muted/40 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5`}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

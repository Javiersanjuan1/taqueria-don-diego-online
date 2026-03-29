import { useState } from "react";
import { menuCategories } from "@/data/menuData";
import tacosImg from "@/assets/tacos-hero.jpg";
import burritoImg from "@/assets/burrito.jpg";
import quesadillaImg from "@/assets/quesadilla.jpg";
import cocktailsImg from "@/assets/cocktails.jpg";
import alambreImg from "@/assets/alambre.jpg";

const categoryImages: Record<string, string> = {
  tacos: tacosImg,
  burritos: burritoImg,
  quesadillas: quesadillaImg,
  alambres: alambreImg,
  cocteles: cocktailsImg,
};

const categoryGroups = [
  { label: "Comida", icon: "🌮", ids: ["tacos", "quesadillas", "burritos", "alambres", "platos-especiales"] },
  { label: "Bebidas", icon: "🍹", ids: ["cocteles", "tequila", "mezcal", "vinos", "cerveza-nacional", "cerveza-mexicana", "bebidas"] },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);

  const filteredCategories = menuCategories.filter((c) =>
    categoryGroups[activeGroup].ids.includes(c.id)
  );

  const displayCategories = activeCategory
    ? filteredCategories.filter((c) => c.id === activeCategory)
    : filteredCategories;

  return (
    <section id="carta" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
            Nuestra carta
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-foreground mt-2">
            SABORES <span className="text-primary">AUTÉNTICOS</span>
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-lg mx-auto">
            Cada plato preparado con recetas tradicionales mexicanas y los ingredientes más frescos
          </p>
        </div>

        {/* Group tabs */}
        <div className="flex justify-center gap-3 mb-8 reveal">
          {categoryGroups.map((group, idx) => (
            <button
              key={group.label}
              onClick={() => { setActiveGroup(idx); setActiveCategory(null); }}
              className={`px-6 py-3 rounded-xl font-body font-bold text-sm transition-all ${
                activeGroup === idx
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {group.icon} {group.label}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full font-body text-sm font-semibold transition-all ${
              !activeCategory
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            Todos
          </button>
          {filteredCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-body text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Featured images row */}
        {!activeCategory && activeGroup === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 reveal">
            {Object.entries(categoryImages).slice(0, 4).map(([id, img]) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={id}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 font-display text-2xl text-foreground capitalize">
                  {id}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Menu items */}
        <div className="space-y-12">
          {displayCategories.map((category) => (
            <div key={category.id} className="reveal">
              <div className="flex items-baseline gap-4 mb-6 pb-3 border-b border-border">
                <h3 className={`font-display text-4xl md:text-5xl ${category.color}`}>
                  {category.title}
                </h3>
                {category.basePrice && (
                  <span className="bg-primary/15 text-primary px-3 py-1 rounded-full font-body font-bold text-sm border border-primary/20">
                    desde {category.basePrice}
                  </span>
                )}
              </div>
              {category.subtitle && (
                <p className="text-muted-foreground font-body mb-4 text-sm italic">
                  {category.subtitle}
                </p>
              )}

              <div className="grid sm:grid-cols-2 gap-3">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col sm:flex-row sm:items-start justify-between gap-1 p-4 rounded-xl bg-muted/30 hover:bg-muted/60 border border-transparent hover:border-border/50 transition-all"
                  >
                    <div className="flex-1">
                      <span className="font-body font-bold text-foreground text-base group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.flavors && (
                        <p className="text-sm mt-1">
                          <span className="text-accent font-semibold">Sabores: </span>
                          <span className="text-muted-foreground">{item.flavors.join(", ")}</span>
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0 mt-1 sm:mt-0 sm:text-right">
                      {item.price && (
                        <span className="text-secondary font-body font-bold text-base">
                          {item.price}
                        </span>
                      )}
                      {item.variants?.map((v, vi) => (
                        <span key={vi} className="text-sm text-muted-foreground">
                          <span className="text-foreground/70">{v.label}</span>{" "}
                          <span className="text-secondary font-bold">{v.price}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

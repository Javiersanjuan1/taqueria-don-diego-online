import { menuCategories } from "@/data/menuData";

const MenuSection = () => {
  return (
    <section id="carta" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-6xl md:text-7xl text-center text-foreground mb-16">
          NUESTRA <span className="text-primary">CARTA</span>
        </h2>

        <div className="space-y-16">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id}>
              <div className="flex items-baseline gap-4 mb-6 border-b border-border pb-3">
                <h3 className={`font-display text-4xl md:text-5xl ${category.color}`}>
                  {category.title}
                </h3>
                {category.basePrice && (
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded font-body font-bold text-lg">
                    {category.basePrice}
                  </span>
                )}
              </div>
              {category.subtitle && (
                <p className="text-muted-foreground font-body mb-4 -mt-4 text-sm italic">
                  {category.subtitle}
                </p>
              )}

              <div className="grid gap-3">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 py-2 border-b border-border/30 last:border-0"
                  >
                    <div className="flex-1">
                      <span className="font-body font-bold text-foreground text-base">
                        {item.name}
                      </span>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-0.5">
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
                    <div className="flex flex-wrap gap-2 sm:text-right shrink-0 mt-1 sm:mt-0">
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

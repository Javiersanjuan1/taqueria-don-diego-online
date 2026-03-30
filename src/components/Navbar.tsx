import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [
  { label: "Carta", href: "#carta" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Pedidos", href: "#pedidos" },
  { label: "Ubicación", href: "#ubicacion" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-3xl text-primary tracking-wide hover:opacity-80 transition-opacity">
          DON DIEGO
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-semibold text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pedidos"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-body font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            <ShoppingBag className="w-4 h-4" />
            Pedir Ahora
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 pb-6 pt-2 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body font-semibold text-foreground/80 py-3 px-2 rounded-lg hover:bg-muted transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pedidos"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-body font-bold text-sm w-full justify-center mt-3"
          >
            <ShoppingBag className="w-4 h-4" />
            Pedir Ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

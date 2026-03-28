import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Carta", href: "#carta" },
  { label: "Pedidos", href: "#pedidos" },
  { label: "Ubicación", href: "#ubicacion" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-primary">
          DON DIEGO
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:911432634"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-body font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            Llamar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-body font-semibold text-foreground/80 py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:911432634"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-body font-semibold text-sm w-fit"
          >
            <Phone className="w-4 h-4" />
            911 43 26 34
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

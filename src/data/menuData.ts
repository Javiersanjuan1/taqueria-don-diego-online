export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  variants?: { label: string; price: string }[];
  flavors?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  basePrice?: string;
  items: MenuItem[];
  color: string;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "tacos",
    title: "TACOS",
    color: "text-secondary",
    items: [
      { name: "Ternera queso", description: "Ternera a la plancha con queso gratinado" },
      { name: "Pollo queso", description: "Pechuga de pollo a la plancha con queso gratinado" },
      { name: "Pollo al Chipotle", description: "Pechuga de pollo guisada con chile picante" },
      { name: "Tinga de Pollo", description: "Pollo guisado con tomate, cebolla y especias mexicanas" },
      { name: "Champiñones queso", description: "Champiñones a la plancha con queso gratinado" },
      { name: "Nopal queso", description: "Cactus tierno a la plancha con queso gratinado" },
      { name: "Vegetales queso", description: "Verdura de temporada a la plancha con queso gratinado" },
      { name: "Vegano", description: "Ensalada de pico de gallo con guacamole fresco" },
    ],
  },
  {
    id: "quesadillas",
    title: "QUESADILLAS",
    basePrice: "4,50 €",
    color: "text-accent",
    items: [
      { name: "Solo queso", description: "Queso gratinado" },
      { name: "Gringa", description: "Carne de pastor, cebolla, cilantro y piña con queso gratinado" },
      { name: "Nopal Champiñones", description: "Nopal con champiñones y queso gratinado" },
      { name: "Pollo a la plancha", description: "Pechuga de pollo cortado en cubos con queso gratinado" },
      { name: "Sincronizada", description: "Jamón con queso gratinado" },
      { name: "Quesabirria", description: "Birria con queso gratinado" },
      { name: "Chorizo", description: "Chorizo desmigado y queso gratinado" },
      { name: "Jalapeño", description: "Chile picante en rodaja con queso gratinado" },
      { name: "Cochinita pibil", description: "Cerdo marinado con queso gratinado" },
      { name: "Vegetariana", description: "Vegetales a la plancha con queso gratinado" },
    ],
  },
  {
    id: "burritos",
    title: "BURRITOS",
    basePrice: "8,50 €",
    color: "text-accent",
    items: [
      { name: "Ternera", description: "Carne de ternera a la plancha con verdura del día, frijoles, arroz, guacamole, queso gratinado con guarnición de pico de gallo" },
      { name: "Pollo", description: "Pechuga de pollo a la plancha con verduras de día, frijoles, arroz, guacamole, queso gratinado con guarnición de pico de gallo" },
      { name: "Mixto", description: "Carne de ternera y pechuga de pollo a la plancha con verduras del día, frijoles, arroz, guacamole, queso gratinado con guarnición de pico de gallo" },
      { name: "Vegetariano", description: "Verduras del día, frijoles, arroz, guacamole, queso gratinado con guarnición de pico de gallo" },
    ],
  },
  {
    id: "alambres",
    title: "ALAMBRES",
    basePrice: "9,00 €",
    subtitle: "Todos con 6 tortillas de maíz",
    color: "text-secondary",
    items: [
      { name: "Ranchero", description: "Carne de ternera salpimentada con cebolla, pimientos y queso gratinado" },
      { name: "Don Diego", description: "Pollo, verduras a la plancha, bacon y queso gratinado" },
      { name: "Tornado", description: "Pollo, ternera y verduras a la plancha (sin queso)" },
      { name: "Bernardo", description: "Carne al pastor, bacon, chorizo y queso gratinado" },
      { name: "Vegetariano", description: "Verduras salteadas a la plancha, nopal, champiñones y queso gratinado" },
    ],
  },
  {
    id: "platos-especiales",
    title: "PLATOS ESPECIALES",
    color: "text-primary",
    items: [
      { name: "Fajitas de pollo", description: "Tiras de pollo, pimientos, cebolla a la plancha acompañado de arroz y frejol ranchero", price: "12,00 €" },
      { name: "Tiras rancheras", description: "Tiras de ternera, pimientos, cebolla a la plancha acompañado de arroz y frejol ranchero", price: "13,00 €" },
      { name: "Enchiladas", description: "Taquitos fritos rellenos de pollo, bañado en salsa verde con queso gratinado", price: "12,00 €" },
      { name: "Tostadas de tinga", description: "Tortilla de maíz fritas con frejol, tinga de pollo, lechuga, queso fresco y nata", price: "5,00 €" },
      { name: "Pozole", description: "Caldo tradicional mexicano hecho a base de granos de maíz nixtamalizados, carnes y especias variadas, se acompaña de repollo y rábanos", price: "7,00 €" },
      { name: "Chilaquiles", description: "Tortilla de maíz fritas con salsa roja (picante) ó salsa verde (no picante) queso gratinado y nata", variants: [{ label: "Grande", price: "13,00 €" }, { label: "Pequeño", price: "7,50 €" }] },
      { name: "Flautas", description: "Tres taquitos crujiente enrollados con pollo, lechuga, nata y queso (3 unidades)", price: "9,50 €" },
      { name: "Chilitos rellenos", description: "Jalapeños rellenos de queso, empanizados y fritos (6 unidades)", price: "8,00 €" },
      { name: "Atún endiablado con totopos", description: "Atún con salsa de chipotle, ensalada y nachos de maíz (ración)", price: "9,00 €" },
      { name: "Chicharrón con guacamole", description: "Torrezno frito acompañado de guacamoles fresco (3 unidades)", price: "10,00 €" },
    ],
  },
  {
    id: "cocteles",
    title: "CÓCTELES",
    color: "text-magenta",
    items: [
      { name: "Margarita", description: "Un clásico mexicano que mezcla tequila, sabor a elegir y licor de naranja. Se sirve en un vaso escarchado con sal y tajín", price: "7,50 €", flavors: ["Limón", "Tamarindo", "Mango", "Jamaica", "Piña", "Maracuya", "Fresa"], variants: [{ label: "Jarra 1L", price: "29,00 €" }] },
      { name: "Mojito", description: "Un coctel refrescante y ligeramente dulce, originario de Cuba. Combina ron blanco, jugo de limón, hojas de menta fresca, azúcar y soda", price: "7,50 €" },
      { name: "Piña Colada", description: "Originario de Puerto Rico, este coctel tropical combina ron, crema de coco y jugo de piña, generalmente servido con hielo", price: "8,00 €" },
      { name: "Michelada", description: "Una bebida mexicana picante. Se prepara mezclando cerveza con jugo de limón, salsas negra, clamato, sal y pimienta. Se sirve en un vaso escarchado con chamoy y tajín", price: "8,00 €" },
      { name: "Paloma", description: "Un coctel mexicano icónico, refrescante. Combina tequila, zumo de lima y jarrito de pomelo, servido en un vaso escarchado con sal", price: "7,50 €" },
      { name: "Charro Negro", description: "Un coctel sencillo y clásico de México. Combina tequila, zumo de lima y jarrito de cola, servido en un vaso escarchado con sal", price: "7,50 €" },
      { name: "Tequila Sunrise", description: "Coctel que evoca un amanecer. Se prepara con tequila, zumo de naranja y granadina. Perfecto para disfrutar de un toque tropical", price: "7,00 €" },
      { name: "Diego on the Beach", description: "Coctel creado por la casa. Se prepara con tequila, mezcal, ron, azúcar y jarrito de lima", price: "7,50 €" },
      { name: "Daiquiri", description: "Un coctel sencillo pero elegante, mezcla ron blanco, azúcar y sabor a elegir", price: "7,50 €", flavors: ["Limón", "Mango", "Fresa", "Piña"] },
      { name: "Pisco Sour", description: "El coctel más emblemático de Perú. Se elabora con pisco, jugo de limón, azúcar, clara de huevo y amargo de Angostura. Se sirve frío en un vaso pequeño", price: "7,00 €" },
      { name: "Caipirinha", description: "El coctel nacional de Brasil, se prepara con cachaça, limón, agua con gas y azúcar. Es una bebida vibrante que representa la cultura brasileña", price: "7,00 €" },
      { name: "Caipiroska", description: "Este coctel es refrescante, sencillo y destaca el sabor, vodka, limón, agua con gas y azúcar", price: "7,00 €" },
      { name: "Terciopelo lila", description: "Coctel creado por la casa. Se prepara con vino tinto, brandi y leche condensada", price: "7,00 €" },
      { name: "Chelada", description: "Cerveza a elegir, limón y sal", price: "6,00 €" },
    ],
  },
  {
    id: "tequila",
    title: "TEQUILA",
    color: "text-accent",
    items: [
      { name: "Jose Cuervo", variants: [{ label: "Reposado 5cc", price: "5,00 €" }, { label: "Plata 5cc", price: "4,50 €" }] },
      { name: "Tequila 1800", variants: [{ label: "Añejo 5cc", price: "9,00 €" }, { label: "Reposado 5cc", price: "7,00 €" }, { label: "Plata 5cc", price: "6,50 €" }] },
      { name: "Herradura", description: "Reposado 5cc", price: "7,50 €" },
      { name: "Corralejo", description: "Reposado 5cc", price: "6,00 €" },
      { name: "Jimador", description: "Reposado 5cc", price: "5,50 €" },
      { name: "Patrón", description: "Reposado 5cc", price: "8,00 €" },
      { name: "Don Julio", description: "Reposado 5cc", price: "9,50 €" },
      { name: "Clase Azul", description: "Reposado 5cc", price: "19,00 €" },
    ],
  },
  {
    id: "mezcal",
    title: "MEZCAL",
    color: "text-secondary",
    items: [
      { name: "Gusano Rojo", description: "5cc", price: "6,00 €" },
      { name: "400 Conejos", description: "5cc", price: "7,00 €" },
    ],
  },
  {
    id: "vinos",
    title: "VINOS",
    color: "text-magenta",
    items: [
      { name: "Vino Tinto", description: "Copa", price: "2,50 €" },
      { name: "Vino Blanco", description: "Copa", price: "2,50 €" },
      { name: "Tinto de Verano", variants: [{ label: "Copa", price: "3,00 €" }, { label: "Jarra 1L", price: "9,00 €" }] },
      { name: "Sangría", variants: [{ label: "Copa", price: "2,50 €" }, { label: "Jarra 1L", price: "9,50 €" }] },
    ],
  },
  {
    id: "cerveza-nacional",
    title: "CERVEZA NACIONAL",
    subtitle: "Estrella Galicia",
    color: "text-secondary",
    items: [
      { name: "Caña 20cl", price: "1,50 €" },
      { name: "Doble 33cl", price: "2,50 €" },
      { name: "Jarra 45cl", price: "3,50 €" },
      { name: "Tercio 1906", price: "2,80 €" },
      { name: "Tercio Tostado 0.0", price: "2,80 €" },
      { name: "Botellín 0.0", price: "1,50 €" },
      { name: "Botellín Estrella G", price: "1,50 €" },
    ],
  },
  {
    id: "cerveza-mexicana",
    title: "CERVEZA MEXICANA",
    color: "text-accent",
    items: [
      { name: "Coronita", price: "2,00 €" },
      { name: "Corona", price: "3,50 €" },
      { name: "Pacífico", price: "3,50 €" },
      { name: "XX Lager", price: "3,50 €" },
      { name: "Modelo Negra", price: "3,50 €" },
      { name: "Modelo Especial", price: "3,50 €" },
      { name: "Desperado", price: "3,50 €" },
      { name: "Sol", price: "3,50 €" },
      { name: "Heineken", price: "2,80 €" },
    ],
  },
  {
    id: "bebidas",
    title: "BEBIDAS",
    color: "text-cyan",
    items: [
      { name: "Limonada", price: "2,50 €" },
      { name: "7UP", price: "2,50 €" },
      { name: "Coca Cola", description: "Original, Zero, Zero Zero", price: "2,50 €" },
      { name: "Fanta", description: "Naranja, Limón", price: "2,50 €" },
      { name: "Zumos embotellado", description: "Piña, Melocotón", price: "2,50 €" },
      { name: "Jarritos", description: "Cola, Lima, Pomelo, Piña, Mandarina, Mango, Fresa y Guayaba", price: "3,50 €" },
      { name: "Agua Fresca", description: "Jamaica, Horchata y Tamarindo", variants: [{ label: "Vaso", price: "3,00 €" }, { label: "Jarra 1L", price: "9,00 €" }] },
      { name: "Agua 1/2l", price: "2,00 €" },
      { name: "Agua con gas 1/2l", price: "2,50 €" },
    ],
  },
];

export const margaritaJarra = "Jarra 1 litro — 29 €";

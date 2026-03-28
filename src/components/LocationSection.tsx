import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-center text-foreground mb-12">
          ENCUÉNTRA<span className="text-primary">NOS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-body font-bold text-foreground text-lg">Dirección</h3>
                <p className="text-muted-foreground">Madrid, España</p>
                <a
                  href="https://www.google.com/maps?ftid=0xd42275f5df019e7:0x72bbe1713c0e8090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm hover:underline mt-1 inline-block"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-body font-bold text-foreground text-lg">Teléfono</h3>
                <a href="tel:911432634" className="text-muted-foreground hover:text-primary transition-colors">
                  911 43 26 34
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-body font-bold text-foreground text-lg">Horario</h3>
                <p className="text-muted-foreground">Consulta nuestro horario llamando al restaurante</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border h-72 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d-3.7!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42275f5df019e7%3A0x72bbe1713c0e8090!2sTaqueria%20Don%20Diego!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 288 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Taquería Don Diego"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

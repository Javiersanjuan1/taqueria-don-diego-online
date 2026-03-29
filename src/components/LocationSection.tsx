import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">
            Ubicación
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2">
            ENCUÉNTRA<span className="text-primary">NOS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6 reveal">
            <div className="bg-muted/40 rounded-2xl p-6 border border-border/30 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/15 rounded-lg p-2.5 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-foreground text-base">Dirección</h3>
                  <p className="text-muted-foreground text-sm mt-1">Madrid, España</p>
                  <a
                    href="https://www.google.com/maps?ftid=0xd42275f5df019e7:0x72bbe1713c0e8090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted/40 rounded-2xl p-6 border border-border/30 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/15 rounded-lg p-2.5 shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-foreground text-base">Teléfono</h3>
                  <a href="tel:911432634" className="text-muted-foreground text-sm hover:text-primary transition-colors mt-1 block">
                    911 43 26 34
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted/40 rounded-2xl p-6 border border-border/30 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/15 rounded-lg p-2.5 shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-bold text-foreground text-base">Horario</h3>
                  <p className="text-muted-foreground text-sm mt-1">Consulta nuestro horario llamando al restaurante</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 reveal reveal-delay-2 rounded-2xl overflow-hidden border border-border h-80 lg:h-auto shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5!2d-3.7!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42275f5df019e7%3A0x72bbe1713c0e8090!2sTaqueria%20Don%20Diego!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
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

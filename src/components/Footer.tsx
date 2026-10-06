import { Link } from 'react-router';
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, MAPS_URL } from '@/data/menu';

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/img/logo-cream.png"
            alt="Restaurante Mercosur"
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Restaurant · Pizzería · Parrillada. Un capítulo vivo en la historia y el corazón de
            Colonia del Sacramento.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-display text-lg font-semibold text-gold">Nuestro restaurante</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li>
              <Link to="/lacarta" className="transition-colors hover:text-gold">La Carta</Link>
            </li>
            <li>
              <Link to="/#mercosur-viaja" className="transition-colors hover:text-gold">Mercosur Viaja — Para llevar</Link>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                <MapPin size={15} /> Av. General Flores 252, Colonia
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={15} /> Todos los días · de 11:00 al cierre
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-display text-lg font-semibold text-gold">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                <MessageCircle size={15} /> +598 91 387 172 — WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-cream/50">
            Utilizamos productos de calidad certificada. Opciones para celíacos, diabéticos,
            vegetarianos, veganos y menú infantil.
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Restaurante Mercosur — Colonia del Sacramento, Uruguay
      </div>
    </footer>
  );
}

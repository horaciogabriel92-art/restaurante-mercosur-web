import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '@/data/menu';

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/lacarta', label: 'La Carta' },
  { to: '/#mercosur-viaja', label: 'Mercosur Viaja' },
  { to: '/#visitanos', label: 'Visitanos' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(26,11,14,0.08)]' : ''
      }`}
    >
      <div className="mx-auto flex h-22 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2" aria-label="Restaurante Mercosur — inicio">
          <img
            src="/img/logo-header.webp"
            alt="Restaurante Mercosur"
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {LINKS.map((l) =>
            l.to.includes('#') ? (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm font-medium tracking-wide text-ink transition-colors hover:text-wine"
              >
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-wine' : 'text-ink hover:text-wine'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-wine px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-wine-deep"
          >
            Escribinos
          </a>
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 pb-6 pt-2 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="block border-b border-ink/5 py-3 text-base font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block rounded-full bg-wine px-5 py-3 text-center text-sm font-semibold text-cream"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

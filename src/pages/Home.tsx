import { Link } from 'react-router';
import { ArrowRight, MapPin, Clock, MessageCircle, Flame, Pizza, Croissant, IceCreamBowl } from 'lucide-react';
import { WHATSAPP_URL, MAPS_URL } from '@/data/menu';

const destacados = [
  { id: 'parrilla', name: 'Parrilla', img: '/img/cat-parrilla.webp', dish: '/img/dish-parrilla.webp' },
  { id: 'minutas', name: 'Chivitos & Minutas', img: '/img/cat-minutas.webp', dish: '/img/dish-chivito.webp' },
  { id: 'pizzas', name: 'Pizzas', img: '/img/cat-pizzas.webp', dish: '/img/dish-pizza.webp' },
  { id: 'postres', name: 'Postres', img: '/img/cat-postres.webp', dish: '/img/dish-postres.webp' },
];

const momentos = [
  { icon: Flame, title: 'Parrilla', text: 'Cortes seleccionados, al fuego de siempre.' },
  { icon: Pizza, title: 'Pizzería', text: 'Masas artesanales con el sabor de Colonia.' },
  { icon: Croissant, title: 'Cafetería', text: 'Del desayuno a la merienda, siempre recién hecho.' },
  { icon: IceCreamBowl, title: 'Para la familia', text: 'Menú infantil y opciones para todos los gustos.' },
];

export function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-ink">
        <img
          src="/img/dish-parrilla.webp"
          alt="Parrilla en Restaurante Mercosur"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/45 to-ink/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 py-28 text-center">
          <p className="mb-5 inline-block rounded-full border border-gold/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            34 años de gastronomía coloniense
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            La mejor esquina
            <br />
            de <span className="text-gold">Colonia</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Parrilla, pizzería y cafetería en el corazón de Colonia del Sacramento. Si buscás
            dónde comer en Colonia del Sacramento, en Mercosur encontrás comida típica uruguaya,
            chivito, parrilla y los buenos momentos, desde 1991.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/lacarta"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-gold-deep sm:w-auto"
            >
              Ver la carta <ArrowRight size={16} />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              <MessageCircle size={16} /> Escribinos
            </a>
          </div>
        </div>
      </section>

      {/* BANDA DORADA */}
      <div className="bg-gold py-3.5">
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.3em] text-ink">
          Parrilla · Pizzería · Chivitos · Cafetería
        </p>
      </div>

      {/* BIENVENIDA */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Bienvenidos</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Restaurante Mercosur te da la bienvenida
          </h2>
          <p className="mt-6 leading-relaxed text-ink/75">
            Un lugar donde los sabores tradicionales y la hospitalidad se encuentran en cada
            rincón. Un espacio acogedor y lleno de historia, en la mejor esquina de Colonia del
            Sacramento. Somos una referencia para quienes buscan comida típica uruguaya: chivito,
            parrillada, pastas caseras y pizzas artesanales.
          </p>
          <p className="mt-4 leading-relaxed text-ink/75">
            Nuestra parrilla es la protagonista, con cortes de carne seleccionados para paladares
            exigentes. Pero hay más: desde nuestras exquisitas entradas hasta los postres
            caseros, cada opción es un homenaje a la cocina local. El chivito del Restaurante
            Mercosur en Colonia del Sacramento es uno de los platos más pedidos por locales y
            turistas.
          </p>
          <Link
            to="/lacarta"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wider text-wine transition-colors hover:border-wine"
          >
            Descubrir la carta <ArrowRight size={15} />
          </Link>
        </div>
        <div>
          <img
            src="/img/dish-chivito.webp"
            alt="Chivito Mercosur"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* DESTACADOS DE LA CARTA */}
      <section className="bg-parchment py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Destacados</p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-ink">Lo más pedido</h2>
            </div>
            <Link
              to="/lacarta"
              className="inline-flex items-center gap-2 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wider text-wine transition-colors hover:border-wine"
            >
              Toda la carta <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destacados.map((d) => (
              <Link
                key={d.id}
                to={`/lacarta#${d.id}`}
                className="group block overflow-hidden rounded-2xl bg-cream shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={d.dish}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <img
                    src={d.img}
                    alt=""
                    aria-hidden
                    className="absolute bottom-3 left-3 w-14 drop-shadow-md"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <h3 className="font-display text-xl font-semibold text-ink">{d.name}</h3>
                  <ArrowRight size={18} className="text-gold-deep transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENTOS / PARA TODA LA FAMILIA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Mercosur para toda la familia</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink">
          Un lugar para cada momento del día
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {momentos.map((m) => (
            <div key={m.title} className="border-t-2 border-gold pt-5">
              <m.icon size={26} className="text-wine" strokeWidth={1.8} />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{m.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <img src="/img/dish-pizza.webp" alt="Pizzas" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/img/dish-pastas.webp" alt="Pastas" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
          <img src="/img/dish-especialidad.webp" alt="Cafetería de especialidad" className="aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
        </div>
      </section>

      {/* HISTORIA */}
      <section className="relative overflow-hidden bg-wine py-24 text-cream">
        {/* Imagen de parrilla fundida con el fondo */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/img/dish-parrilla.webp)' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-wine via-wine/85 to-wine/40"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.4fr]">
          <div className="relative">
            <span
              className="absolute -left-6 -top-10 select-none font-display text-[8rem] font-semibold leading-none text-cream/60 sm:-left-10 sm:text-[11rem]"
              aria-hidden
            >
              34
            </span>
            <p className="relative font-display text-[7rem] font-semibold leading-none text-gold sm:text-[9rem]">34</p>
            <p className="relative text-sm font-semibold uppercase tracking-[0.3em] text-cream/80">años de historia</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              La cocina con más historia de la ciudad
            </h2>
            <p className="mt-6 leading-relaxed text-cream/80">
              Desde hace 34 años, en la mejor esquina de Colonia del Sacramento, Mercosur ha unido
              tradición y calidad en cada plato. Testigo de risas y celebraciones, hemos sido el
              encuentro de generaciones. Bienvenidos a Mercosur, un capítulo vivo en la historia y
              el corazón de Colonia.
            </p>
          </div>
        </div>
      </section>

      {/* MERCOSUR VIAJA */}
      <section id="mercosur-viaja" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-5 py-24 md:grid-cols-2">
        <img
          src="/img/dish-parrilla.webp"
          alt="Mercosur Viaja — para llevar"
          className="aspect-[4/3] w-full rounded-2xl object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Para llevar</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">Mercosur Viaja</h2>
          <p className="mt-6 leading-relaxed text-ink/75">
            ¿Preferís disfrutar en tu propio hogar? Con Mercosur Viaja llevamos toda la carta a tu
            mesa: la misma parrilla, los mismos sabores, donde estés. Consultanos las promociones
            del día por WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-wine px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:bg-wine-deep"
          >
            <MessageCircle size={16} /> Pedir por WhatsApp
          </a>
        </div>
      </section>

      {/* VISITANOS */}
      <section id="visitanos" className="bg-parchment py-24">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Visitanos</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Te esperamos en la mejor esquina
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-cream p-6 transition-shadow hover:shadow-md"
            >
              <MapPin size={24} className="mx-auto text-wine" strokeWidth={1.8} />
              <p className="mt-3 text-sm font-semibold text-ink">Gral. Flores 252</p>
              <p className="text-xs text-ink/60">70000 Colonia del Sacramento</p>
              <p className="text-xs text-ink/60">Departamento de Colonia, Uruguay</p>
            </a>
            <div className="rounded-2xl bg-cream p-6">
              <Clock size={24} className="mx-auto text-wine" strokeWidth={1.8} />
              <p className="mt-3 text-sm font-semibold text-ink">Todos los días</p>
              <p className="text-xs text-ink/60">De 11:00 al cierre</p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-cream p-6 transition-shadow hover:shadow-md"
            >
              <MessageCircle size={24} className="mx-auto text-wine" strokeWidth={1.8} />
              <p className="mt-3 text-sm font-semibold text-ink">+598 91 387 172</p>
              <p className="text-xs text-ink/60">Pedidos y consultas</p>
            </a>
          </div>
        </div>
      </section>

      {/* SEO / Información para IA search */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl bg-parchment p-8 md:p-12">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Restaurante Mercosur en Colonia del Sacramento
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink/80">
            <p>
              Ubicados en <strong>Gral. Flores 252, 70000 Colonia del Sacramento, Departamento de Colonia</strong>,
              somos el punto de encuentro ideal para quienes se preguntan{' '}
              <em>dónde comer en Colonia del Sacramento</em>. Desde 1991 servimos{' '}
              <strong>comida típica uruguaya</strong> con la calidez de un restaurante de familia
              y la experiencia de 34 años.
            </p>
            <p>
              Nuestra propuesta une lo mejor de la <strong>parrilla uruguaya</strong>, pizzas
              artesanales, pastas caseras y el clásico <strong>chivito</strong>. Contamos con
              opciones para celíacos, vegetarianos, veganos, menú infantil y un servicio de
              take-away llamado Mercosur Viaja.
            </p>
            <p>
              Abrimos todos los días a partir de las 11:00. Reservas, pedidos y consultas por
              WhatsApp al <strong>+598 91 387 172</strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

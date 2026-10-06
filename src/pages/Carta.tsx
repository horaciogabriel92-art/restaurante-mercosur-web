import { useEffect, useRef, useState } from 'react';
import { Leaf, Info } from 'lucide-react';
import { MENU, TAG_LABELS, type Category, type Dish } from '@/data/menu';
import { DishModal } from '@/components/DishModal';

type SelectedDish = Dish & { categoryName: string };

function DishRow({ dish, onSelect }: { dish: Dish; onSelect: (d: Dish) => void }) {
  return (
    <button
      onClick={() => onSelect(dish)}
      className="group flex w-full flex-wrap items-baseline gap-x-2 gap-y-1 py-2.5 text-left transition-colors"
      aria-label={`Ver detalle de ${dish.name}`}
    >
      <span className="min-w-0 break-words text-[15px] font-medium text-ink transition-colors group-hover:text-wine">
        {dish.name}
        {dish.tag && (
          <span className="ml-2 inline-block translate-y-[-1px] rounded-full border border-leaf/40 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wider text-leaf">
            {TAG_LABELS[dish.tag]}
          </span>
        )}
      </span>
      <span className="mx-1 min-w-4 flex-1 border-b border-dotted border-taupe/50" aria-hidden />
      {dish.price && (
        <span className="font-display text-[15px] font-semibold text-wine">{dish.price}</span>
      )}
      {dish.price2 && (
        <span className="whitespace-nowrap text-right">
          {dish.price2.map((p) => (
            <span key={p.label} className="ml-3 text-sm text-ink/70 first:ml-0">
              <span className="mr-1 text-[10px] uppercase tracking-wider text-taupe">{p.label}</span>
              <span className="font-display font-semibold text-wine">{p.value}</span>
            </span>
          ))}
        </span>
      )}
    </button>
  );
}

function CategorySection({ cat, onSelect }: { cat: Category; onSelect: (d: Dish, c: Category) => void }) {
  const healthy = cat.id === 'carta-saludable';
  return (
    <section
      id={cat.id}
      data-cat={cat.id}
      className={`scroll-mt-36 rounded-3xl p-6 sm:p-10 ${
        healthy ? 'border border-leaf/25 bg-[#f2f7f0]' : 'bg-cream'
      }`}
    >
      <div className="flex items-center gap-4">
        <div>
          {healthy && (
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-leaf">
              <Leaf size={13} /> Opciones saludables
            </p>
          )}
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{cat.name}</h2>
        </div>
      </div>
      {cat.note && <p className="mt-3 max-w-xl text-sm italic text-ink/60">{cat.note}</p>}

      <div className={`mt-8 grid gap-10 ${cat.dishImage ? 'lg:grid-cols-[1.5fr_1fr]' : ''}`}>
        <div>
          {cat.items.length > 0 && (
            <div className="divide-y divide-ink/5">
              {cat.items.map((d) => (
                <DishRow key={d.name} dish={d} onSelect={(dish) => onSelect(dish, cat)} />
              ))}
            </div>
          )}
          {cat.subcats?.map((sub) => (
            <div key={sub.name} className="mt-8">
              <h3 className={`font-display text-xl font-semibold ${healthy ? 'text-leaf' : 'text-gold-deep'}`}>
                {sub.name}
              </h3>
              <div className="mt-2 divide-y divide-ink/5">
                {sub.items.map((d) => (
                  <DishRow key={d.name} dish={d} onSelect={(dish) => onSelect(dish, cat)} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {cat.dishImage && (
          <div className="order-first lg:order-none">
            <div className="overflow-hidden rounded-2xl lg:sticky lg:top-32">
              <img
                src={cat.dishImage}
                alt={cat.name}
                className="aspect-[16/9] w-full object-cover lg:aspect-[4/5]"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Carta() {
  const [selected, setSelected] = useState<SelectedDish | null>(null);
  const [active, setActive] = useState(MENU[0].id);
  const observer = useRef<IntersectionObserver | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Entrada con ancla (ej. /lacarta#parrilla)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && MENU.some((c) => c.id === hash)) {
      setTimeout(() => scrollTo(hash), 150);
    }
  }, []);

  // Resaltar la categoría visible
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    MENU.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.current?.observe(el);
    });
    return () => observer.current?.disconnect();
  }, []);

  return (
    <main className="overflow-x-clip pt-18">
      {/* CABECERA */}
      <section className="border-b border-ink/10 bg-parchment py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Restaurante Mercosur</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-ink sm:text-6xl">La Carta</h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink/70">
            Tocá cualquier plato para ver su ficha. Los precios están expresados en pesos uruguayos.
          </p>
        </div>
      </section>

      {/* NAVEGACIÓN POR CATEGORÍAS */}
      <div className="sticky top-18 z-30 border-b border-ink/10 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {MENU.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollTo(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c.id
                  ? c.id === 'carta-saludable'
                    ? 'bg-leaf text-cream'
                    : 'bg-wine text-cream'
                  : 'bg-ink/5 text-ink/70 hover:bg-ink/10 hover:text-ink'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* SECCIONES */}
      <div className="mx-auto max-w-6xl space-y-6 px-5 py-12">
        {MENU.map((cat) => (
          <CategorySection
            key={cat.id}
            cat={cat}
            onSelect={(dish, c) => setSelected({ ...dish, categoryName: c.name })}
          />
        ))}

        {/* NOTA FINAL */}
        <div className="flex items-start gap-4 rounded-3xl bg-wine p-8 text-cream">
          <Info size={22} className="mt-0.5 shrink-0 text-gold" />
          <p className="text-sm leading-relaxed text-cream/85">
            Restaurante Mercosur utiliza productos de calidad certificada para la elaboración de
            todos sus platos. Nuestra pasión es la gastronomía y Mercosur es una opción pensada
            para toda la familia: incorporamos menú para pacientes celíacos y diabéticos, además de
            opciones vegetarianas, veganas y menú infantil.
          </p>
        </div>
      </div>

      <DishModal dish={selected} onClose={() => setSelected(null)} />
    </main>
  );
}

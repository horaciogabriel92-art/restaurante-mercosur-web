import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Camera } from 'lucide-react';
import { TAG_LABELS, type Dish } from '@/data/menu';

interface Props {
  dish: (Dish & { categoryName: string }) | null;
  onClose: () => void;
}

/**
 * Ficha del plato. Si el plato tiene `image` definida en los datos, se muestra la foto;
 * si no, se renderiza un placeholder elegante listo para cuando el cliente cargue fotos.
 */
export function DishModal({ dish, onClose }: Props) {
  return (
    <Dialog open={dish !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg overflow-hidden border-ink/10 bg-cream p-0">
        {dish && (
          <div>
            <div className="relative aspect-[4/3] w-full bg-parchment">
              {dish.image ? (
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-taupe">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-taupe/30">
                    <Camera size={26} strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-2xl font-semibold tracking-wide text-wine/60">
                    {dish.name.charAt(0)}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em]">Foto próximamente</span>
                </div>
              )}
              {dish.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-wine px-3 py-1 text-xs font-semibold text-cream">
                  {TAG_LABELS[dish.tag]}
                </span>
              )}
            </div>
            <div className="px-6 pb-7 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                {dish.categoryName}
              </p>
              <DialogTitle className="mt-1 font-display text-2xl font-semibold text-ink">
                {dish.name}
              </DialogTitle>
              {dish.description && (
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{dish.description}</p>
              )}
              <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-1 border-t border-ink/10 pt-4">
                {dish.price && (
                  <span className="font-display text-2xl font-semibold text-wine">{dish.price}</span>
                )}
                {dish.price2?.map((p) => (
                  <span key={p.label} className="text-sm text-ink/70">
                    <span className="mr-1 text-xs uppercase tracking-wider text-taupe">{p.label}</span>
                    <span className="font-display text-lg font-semibold text-wine">{p.value}</span>
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-taupe">Precios en pesos uruguayos.</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

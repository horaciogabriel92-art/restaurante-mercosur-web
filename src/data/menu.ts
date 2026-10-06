export interface Dish {
  name: string;
  /** Precio simple, o par de precios (ej. pizzas: individual / grande) */
  price?: string;
  price2?: { label: string; value: string }[];
  /** Foto individual del plato. Cuando el cliente cargue fotos, basta con completar esta ruta. */
  image?: string;
  description?: string;
  tag?: 'celiaco' | 'diabetico' | 'vegetariano' | 'vegano' | 'infantil';
}

export interface Subcategory {
  name: string;
  items: Dish[];
}

export interface Category {
  id: string;
  name: string;
  note?: string;
  image?: string;
  dishImage?: string;
  items: Dish[];
  subcats?: Subcategory[];
}

export const MENU: Category[] = [
  {
    id: 'chivitos',
    name: 'Chivitos',
    dishImage: '/img/dish-chivito.webp',
    items: [
      { name: 'Común', price: '$599' },
      { name: 'Canadiense', price: '$795' },
      { name: 'Canadiense c/ fritas', price: '$899' },
      { name: 'Al plato para 1', price: '$949' },
      { name: 'Al plato para 2', price: '$1495' },
    ],
  },
  {
    id: 'minutas',
    name: 'Minutas',
    image: '/img/cat-minutas.webp',
    items: [
      { name: 'Tortilla de papas', price: '$649' },
      { name: 'Pancho', price: '$199' },
      { name: 'Pancho c/ mozarela', price: '$295' },
      { name: 'Pancho c/ mozarela y jamón', price: '$395' },
      { name: 'Pancho completo c/ fritas', price: '$595' },
      { name: 'Chorizo al pan', price: '$449' },
      { name: 'Gramajo', price: '$695' },
      { name: 'Picada completa', price: '$899' },
    ],
    subcats: [
      {
        name: 'Milanesas',
        items: [
          { name: 'Milanesa c/ guarnición', price: '$799' },
          { name: 'Milanesa napolitana c/ guarnición', price: '$949' },
          { name: 'Milanesa al pan', price: '$649' },
          { name: 'Super Mila Napolitana XXL', price: '$1595' },
          { name: 'Super Mila Cheddar XXL', price: '$1595' },
          { name: 'Super Mila Mexicana XXL', price: '$1595' },
        ],
      },
      {
        name: 'Hamburguesas',
        items: [
          { name: 'Cheeseburger', price: '$99' },
          { name: 'Hamburguesa común', price: '$385' },
          { name: 'Americana', price: '$495' },
          { name: 'Napolitana', price: '$495' },
          { name: 'Explosiva', price: '$495' },
          { name: 'Mexicana', price: '$495' },
          { name: 'Vegana / Vegetariana', price: '$495', tag: 'vegano' },
          { name: 'Doble Cheese', price: '$319' },
          { name: 'Extra Cheese', price: '$439' },
          { name: 'Completa', price: '$599' },
        ],
      },
    ],
  },
  {
    id: 'parrilla',
    name: 'Parrilla',
    note: 'Los mejores cortes, al fuego de siempre.',
    image: '/img/cat-parrilla.webp',
    dishImage: '/img/dish-parrilla.webp',
    items: [
      { name: 'Provoleta Mercosur', price: '$695' },
      { name: 'Asado de tira (400 gr)', price: '$849' },
      { name: 'Asado Manta Premium', price: '$895' },
      { name: 'Chorizo / Morcilla', price: '$339' },
      { name: 'Chinchulín / Riñón', price: '$349' },
      { name: 'Bondiola / Pamplona de cerdo', price: '$699' },
      { name: 'Parrillada de verduras', price: '$849', tag: 'vegetariano' },
      { name: 'Parrillero chico', price: '$1895' },
      { name: 'Parrillero Grande (para 5)', price: '$2990' },
      { name: 'Parrillero Premium (para 5)', price: '$3990' },
    ],
  },
  {
    id: 'guarniciones',
    name: 'Guarniciones',
    image: '/img/cat-guarniciones.webp',
    items: [
      { name: 'Fritas', price: '$395' },
      { name: 'Fritas c/ cheddar & panceta', price: '$549' },
      { name: 'Noisette', price: '$495' },
      { name: 'Mixta o rusa', price: '$495' },
      { name: 'Ensalada Completa', price: '$695' },
      { name: 'Ensalada Cesar', price: '$749' },
      { name: 'Ensalada Capresse', price: '$699' },
    ],
  },
  {
    id: 'especiales',
    name: 'Platos Especiales',
    items: [
      { name: 'Entrecote con guarnición', price: '$979' },
      { name: 'Lomo con guarnición', price: '$979' },
      { name: 'Lomo al champiñón', price: '$990' },
      { name: 'Pollo con guarnición', price: '$795' },
      { name: 'Pescado con guarnición', price: '$795' },
      { name: 'Rabas', price: '$649' },
      { name: 'Sopa del día', price: '$295' },
    ],
  },
  {
    id: 'pastas',
    name: 'Pastas',
    image: '/img/cat-pasta.webp',
    dishImage: '/img/dish-pastas.webp',
    items: [
      { name: 'Spaguetti', price: '$449' },
      { name: 'Ravioles de Verdura', price: '$549' },
      { name: 'Ñoquis', price: '$499' },
      { name: 'Sorrentinos jamón & queso', price: '$649' },
    ],
    subcats: [
      {
        name: 'Salsas',
        items: [
          { name: 'Bolognesa', price: '$269' },
          { name: 'Fileto', price: '$249' },
          { name: 'Rosa', price: '$279' },
          { name: 'Carusso / Champignon', price: '$289' },
          { name: '4 Quesos', price: '$349' },
        ],
      },
    ],
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    image: '/img/cat-pizzas.webp',
    dishImage: '/img/dish-pizza.webp',
    items: [
      { name: 'Faina', price: '$249' },
      { name: 'Común', price2: [{ label: 'Individual', value: '$289' }, { label: 'Grande', value: '$495' }] },
      { name: 'Muzzarela', price2: [{ label: 'Individual', value: '$449' }, { label: 'Grande', value: '$849' }] },
      { name: 'Con Jamón', price2: [{ label: 'Individual', value: '$599' }, { label: 'Grande', value: '$995' }] },
      { name: 'Con aceitunas', price2: [{ label: 'Individual', value: '$499' }, { label: 'Grande', value: '$899' }] },
      { name: 'Con panceta', price2: [{ label: 'Individual', value: '$599' }, { label: 'Grande', value: '$995' }] },
      { name: 'Napolitana', price2: [{ label: 'Individual', value: '$599' }, { label: 'Grande', value: '$995' }] },
      { name: '4 Quesos', price2: [{ label: 'Individual', value: '$695' }, { label: 'Grande', value: '$1195' }] },
      { name: 'Fugazzeta', price2: [{ label: 'Individual', value: '$599' }, { label: 'Grande', value: '$990' }] },
      { name: 'Calabresa', price2: [{ label: 'Individual', value: '$599' }, { label: 'Grande', value: '$995' }] },
      { name: 'Rúcula y Parmesano', price2: [{ label: 'Individual', value: '$649' }, { label: 'Grande', value: '$1149' }] },
      { name: 'Mercosur', price2: [{ label: 'Individual', value: '$649' }, { label: 'Grande', value: '$1190' }] },
      { name: 'Pizza Explosiva', price2: [{ label: 'Individual', value: '$695' }, { label: 'Grande', value: '$1295' }] },
    ],
  },
  {
    id: 'menu-infantil',
    name: 'Menú Infantil',
    image: '/img/cat-infantil.webp',
    items: [
      { name: 'Casita de carqueja', price: '$649', tag: 'infantil' },
      { name: 'Nuggets', price: '$495', tag: 'infantil' },
      { name: 'Chivito al plato infantil', price: '$795', tag: 'infantil' },
    ],
  },
  {
    id: 'carta-saludable',
    name: 'Carta Saludable',
    note: 'Opciones para celíacos, diabéticos, vegetarianos y veganos.',
    items: [],
    subcats: [
      {
        name: 'Platos',
        items: [
          { name: 'Hamburguesa al plato', price: '$795', tag: 'celiaco' },
          { name: 'Chivito al plato para 1', price: '$995', tag: 'celiaco' },
          { name: 'Pizza con muzzarela', price: '$949', tag: 'celiaco' },
          { name: 'Milanesa de carne con guarnición', price: '$849', tag: 'celiaco' },
          { name: 'Pollo con verduras asadas', price: '$849' },
          { name: 'Ñoquis salsa fileto o bolognesa', price: '$799' },
          { name: 'Ensalada Cesar', price: '$749' },
        ],
      },
      {
        name: 'Postres',
        items: [
          { name: 'Flan con dulce', price: '$295', tag: 'diabetico' },
          { name: 'Isla flotante', price: '$395' },
          { name: 'Helados', price: '$349' },
          { name: 'Alfajores', price: '$159' },
        ],
      },
    ],
  },
  {
    id: 'postres',
    name: 'Postres',
    image: '/img/cat-postres.webp',
    dishImage: '/img/dish-postres.webp',
    items: [
      { name: 'Isla flotante', price: '$349' },
      { name: 'Flan con dulce o crema', price: '$289' },
      { name: 'Cono helado', price: '$99' },
      { name: 'Sundae', price: '$149' },
      { name: 'Sundae Oreo', price: '$189' },
      { name: 'Tortas del chef', price: '$399' },
      { name: 'Tortas premium del chef', price: '$499' },
      { name: 'Brownie con helado', price: '$499' },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    image: '/img/cat-bebidas.webp',
    items: [
      { name: 'Agua 600 cc', price: '$145' },
      { name: 'Aguas saborizadas', price: '$155' },
      { name: 'Gaseosa 600 cc', price: '$165' },
      { name: 'Gaseosa litro y medio', price: '$349' },
      { name: 'Limonada de la casa', price: '$249' },
      { name: 'Jugo de naranja', price: '$249' },
    ],
    subcats: [
      {
        name: 'Cervezas',
        items: [
          { name: 'Porrón Pilsen / Patricia', price: '$249' },
          { name: 'Porrón Corona / Corona 0%', price: '$349' },
          { name: 'Lata Patricia / Dunkel / Pilsen 0%', price: '$349' },
          { name: 'Chopp Pilsen / Pilsen 0% / Patricia', price: '$395' },
          { name: 'Directo 1/2', price: '$395' },
        ],
      },
      {
        name: 'Whisky',
        items: [
          { name: 'JW Rojo', price: '$349' },
          { name: 'JW Negro', price: '$499' },
          { name: 'Vat 69 / Gregson / Dumbar', price: '$239' },
          { name: 'Ballantines / Jameson', price: '$329' },
          { name: 'Jack Daniels', price: '$595' },
          { name: 'Chivas', price: '$549' },
        ],
      },
      {
        name: 'Cocktails',
        items: [
          { name: 'Caipiriña / Mojito / Daikiri', price: '$339' },
          { name: 'Gin Tonic / Blue Lagoon', price: '$339' },
          { name: 'Fernet con coca', price: '$339' },
          { name: 'Licores / Vodka', price: '$339' },
        ],
      },
    ],
  },
  {
    id: 'cafeteria',
    name: 'Cafetería',
    image: '/img/cat-cafeteria.webp',
    dishImage: '/img/dish-cafeteria.webp',
    items: [
      { name: 'Té o café / Cortado / Café leche', price: '$145 / $165' },
      { name: 'Capuccino / Submarino', price: '$189 / $249' },
      { name: 'Pebete jamón & queso', price: '$249' },
      { name: 'Tostado', price: '$495' },
      { name: 'Olímpico / Napolitano', price: '$549' },
      { name: 'Alfajores', price: '$159' },
      { name: 'Churros con dulce de leche', price: '$349' },
      { name: 'Merienda completa para 1', price: '$549' },
    ],
  },
  {
    id: 'cafeteria-especialidad',
    name: 'Cafetería de Especialidad',
    image: '/img/cat-cafespec.webp',
    dishImage: '/img/dish-especialidad.webp',
    items: [
      { name: 'Capuccino Colonial', price: '$349' },
      { name: 'Submarino Sacramento', price: '$349' },
      { name: 'Café Irlandés', price: '$349' },
      { name: 'Chocolate a la Piamontesa', price: '$395' },
      { name: 'Frapuccino', price: '$349' },
    ],
  },
];

export const TAG_LABELS: Record<string, string> = {
  celiaco: 'Celíaco',
  diabetico: 'Diabético',
  vegetariano: 'Vegetariano',
  vegano: 'Vegano',
  infantil: 'Menú infantil',
};

export const WHATSAPP_URL = 'https://wa.me/59891387172';
export const MAPS_URL = 'https://maps.app.goo.gl/LN4yHzVZpfewAcW57';


export interface Product {
    id: string;
    brand: string;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    questions: number;
    price: string;
    href: string;
    hint?: string;
    quantity?: number;
    description?: string;
    features?: string[];
    specs?: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: '1',
    brand: 'Flexson',
    name: 'Flexson One/One SL/Play:1 wall mount',
    image: 'https://picsum.photos/seed/s13/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '19.00',
    href: '/products/1',
    hint: 'speaker wall mount one'
  },
  {
    id: '2',
    brand: 'Flexson',
    name: 'Flexson ERA 300 Table Stand',
    image: 'https://picsum.photos/seed/s14/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '34.99',
    href: '/products/2',
    hint: 'speaker table stand'
  },
  {
    id: '3',
    brand: 'Flexson',
    name: 'Flexson ERA 100 Table Stand',
    image: 'https://picsum.photos/seed/s15/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '25.99',
    href: '/products/3',
    hint: 'speaker table stand white'
  },
  {
    id: '4',
    brand: 'Flexson',
    name: 'Flexson ERA 100 Ceiling Holder',
    image: 'https://picsum.photos/seed/s16/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '79.99',
    href: '/products/4',
    hint: 'speaker ceiling holder'
  },
  {
    id: '5',
    brand: 'Flexson',
    name: 'Flexson ERA 300 Ceiling Holder',
    image: 'https://picsum.photos/seed/s17/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '119.99',
    href: '/products/5',
    hint: 'speaker ceiling mount'
  },
  {
    id: '6',
    brand: 'Flexson',
    name: 'Flexson Five stand vertical/horizontal',
    image: 'https://picsum.photos/seed/s18/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '129.99',
    href: '/products/6',
    hint: 'speaker stand vertical'
  },
  {
    id: '7',
    brand: 'SANUS',
    name: 'SANUS Five stand',
    image: 'https://picsum.photos/seed/s19/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '139.99',
    href: '/products/7',
    hint: 'speaker stand white'
  },
  {
    id: '8',
    brand: 'Flexson',
    name: 'Flexson One/One SL/Play:1 wall holder',
    image: 'https://picsum.photos/seed/s20/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '64.99',
    href: '/products/8',
    hint: 'speaker wall holder one'
  },
  {
    id: '9',
    brand: 'Flexson',
    name: 'Flexson One/One SL/Play:1 ceiling holder',
    image: 'https://picsum.photos/seed/s21/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '69.00 - 139.99',
    href: '/products/9',
    hint: 'speaker ceiling holder white'
  },
  {
    id: '10',
    brand: 'Flexson',
    name: 'Flexson ERA 300 wall mount',
    image: 'https://picsum.photos/seed/s22/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '64.99',
    href: '/products/10',
    hint: 'speaker wall mount black'
  },
  {
    id: '11',
    brand: 'Flexson',
    name: 'Flexson ERA 100 wall mount',
    image: 'https://picsum.photos/seed/s23/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '32.90 - 49.00',
    href: '/products/11',
    hint: 'speaker wall mount white'
  }
];

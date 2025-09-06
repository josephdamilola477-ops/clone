
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
    name: 'Flexson ERA 300 Stand',
    image: 'https://picsum.photos/seed/s6/800/800',
    rating: 5,
    reviews: 1,
    questions: 0,
    price: '119.99',
    href: '/products/1',
    hint: 'speaker stand black',
    description: 'The Flexson stand for the Sonos Era 300 is precision-engineered to be the perfect accessory for your speaker. It features a sturdy, elegant design that securely holds the speaker at the ideal listening height.',
    features: [
        'Custom design for the Sonos Era 300',
        'Positions the speaker at the ideal height for seated listening',
        'Quick and easy assembly',
        'Includes adjustable spikes for carpets and rubber feet for hard floors'
    ],
    specs: {
        'Compatibility': 'Sonos Era 300',
        'Material': 'Steel and Aluminum',
        'Height': '80.5 cm'
    }
  },
  {
    id: '2',
    brand: 'SANUS',
    name: 'SANUS ERA 300 wall mount',
    image: 'https://picsum.photos/seed/s7/800/800',
    rating: 5,
    reviews: 1,
    questions: 0,
    price: '54.99 - 89.99',
    href: '/products/2',
    hint: 'speaker wall mount',
    description: 'The SANUS WSWME31 wall mount is designed for the Sonos Era 300 and offers versatile placement options. It allows for tilting and swiveling, ensuring you can direct the sound precisely where you want it.',
    features: [
        'Easy 15-minute installation',
        'Allows for tilt and swivel adjustments',
        'Virtually invisible design',
        'Can be inverted for placement high on the wall'
    ],
    specs: {
        'Compatibility': 'Sonos Era 300',
        'Material': 'Steel',
        'Tilt': '+5° / -20°',
        'Swivel': '+32° / -32°'
    }
  },
  {
    id: '3',
    brand: 'Flexson',
    name: 'Flexson ERA 100 Stand',
    image: 'https://picsum.photos/seed/s8/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '69.99 - 119.00',
    href: '/products/3',
    hint: 'speaker stand black',
    description: 'The Flexson stand for the Sonos Era 100 is the perfect solution to place your speaker at the ideal height. The simple design puts the focus on the speaker and blends into any interior style.',
    features: [
        'Custom design for the Sonos Era 100',
        'Positions the speaker at the ideal listening height',
        'Includes spikes for carpets and rubber feet for hard floors',
        'Quick and easy to assemble'
    ],
    specs: {
        'Compatibility': 'Sonos Era 100',
        'Material': 'Steel and Aluminum',
        'Height': '79.1 cm'
    }
  },
  {
    id: '4',
    brand: 'SANUS',
    name: 'SANUS ERA 100 wall mount',
    image: 'https://picsum.photos/seed/s9/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '44.99 - 69.99',
    href: '/products/4',
    hint: 'speaker wall mount white',
     description: "The SANUS WSWME11 wall mount is designed for the Sonos Era 100. It offers optimal placement, is easy to install, and allows for tilt and swivel adjustments.",
    features: [
        "Easy installation",
        "Allows for tilt and swivel adjustments",
        "Sleek, unobtrusive design"
    ],
    specs: {
        "Compatibility": "Sonos Era 100",
        "Material": "Steel"
    }
  },
  {
    id: '5',
    brand: 'Flexson',
    name: 'Flexson ERA100/ONE FLXE100ICM1011 Built-in ceiling/wall mount',
    image: 'https://picsum.photos/seed/s10/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '119.99',
    href: '/products/5',
    hint: 'speaker ceiling mount',
    description: 'This Flexson mount allows you to discreetly install your Sonos Era 100 or One speaker in the ceiling or wall, providing a clean, professional finish.',
    features: [
        'For wall or ceiling installation',
        'Paintable grille to match your decor',
        'Securely holds the speaker'
    ],
    specs: {
        'Compatibility': 'Sonos Era 100, Sonos One, Sonos One SL, Play:1',
        'Type': 'In-ceiling/In-wall'
    }
  },
  {
    id: '6',
    brand: 'Flexson',
    name: 'Flexson ERA100 security kit wall holder',
    image: 'https://picsum.photos/seed/s11/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '19.99',
    href: '/products/6',
    hint: 'speaker wall holder',
    description: 'The Flexson security kit provides an extra layer of security for your wall-mounted Sonos Era 100 speaker, making it ideal for commercial or public spaces.',
    features: [
        'Added security for your speaker',
        'Easy to install with existing wall mount',
        'Durable steel construction'
    ],
    specs: {
        'Compatibility': 'Sonos Era 100 with Flexson wall mount',
        'Material': 'Steel'
    }
  },
  {
    id: '7',
    brand: 'Flexson',
    name: 'Flexson Move 2 Stand FLXSMFS1051 Black',
    image: 'https://picsum.photos/seed/s12/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '149.99',
    href: '/products/7',
    hint: 'speaker stand move',
    description: 'The Flexson stand for the Sonos Move 2 is the perfect way to place your portable speaker at home. It positions the speaker at the ideal listening height and includes the charging base.',
    features: [
        'Perfect for the Sonos Move 2',
        'Includes charging base for easy charging',
        'Sturdy and elegant design'
    ],
    specs: {
        'Compatibility': 'Sonos Move 2',
        'Material': 'Steel and Aluminum'
    }
  },
  {
    id: '8',
    brand: 'Flexson',
    name: 'Flexson One/One SL/Play:1 wall mount',
    image: 'https://picsum.photos/seed/s13/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '19.00',
    href: '/products/8',
    hint: 'speaker wall mount one',
    description: 'A versatile wall mount for the Sonos One, One SL, and Play:1 speakers. It allows for tilting and swiveling to direct the sound exactly where you want it.',
    features: [
        'Tilt and swivel functionality',
        'Can be mounted upright or inverted',
        'Available in black and white'
    ],
    specs: {
        'Compatibility': 'Sonos One, One SL, Play:1',
        'Material': 'Steel'
    }
  },
  {
    id: '9',
    brand: 'Flexson',
    name: 'Flexson ERA 300 Table Stand',
    image: 'https://picsum.photos/seed/s14/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '34.99',
    href: '/products/9',
    hint: 'speaker table stand',
    description: 'The Flexson table stand for the Sonos Era 300 is a compact, elegant solution for placing your speaker on a desk, table, or shelf. It minimizes vibration and provides a secure platform.',
    features: [
        'Compact and elegant design',
        'Minimizes vibration for better sound quality',
        'Perfect for desks and shelves'
    ],
    specs: {
        'Compatibility': 'Sonos Era 300',
        'Material': 'Steel and Aluminum'
    }
  }
];

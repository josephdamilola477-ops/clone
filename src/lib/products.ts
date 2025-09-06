
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
    brand: 'SANUS',
    name: 'SANUS ERA 300 Stand',
    image: 'https://picsum.photos/seed/s1/800/800',
    rating: 5,
    reviews: 2,
    questions: 1,
    price: '114.99',
    href: '/products/1',
    hint: 'speaker stand',
    description: "The SANUS WSS22 stand is designed to place the Sonos Era 300™ wireless speaker at the optimal listening height while perfectly matching any home decor. Made from high-quality steel, the WSS22 offers exceptional stability and durability.",
    features: [
        "Places the speaker at the optimal listening height",
        "Cable management for a clean look",
        "Easy assembly in 15 minutes",
        "Includes rubber feet and height-adjustable spikes for different floors"
    ],
    specs: {
        "Compatibility": "Sonos Era 300",
        "Material": "Steel and Aluminum",
        "Height": "83.82 cm",
        "Weight": "3.4 kg"
    }
  },
  {
    id: '2',
    brand: 'Flexson',
    name: 'Flexson One/One SL/Play 1 stand',
    image: 'https://picsum.photos/seed/s2/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '39.00 - 79.00',
    href: '/products/2',
    hint: 'speaker stand white',
    description: "Place your Sonos One, One SL, or Play:1 speakers at the ideal height with this custom-designed stand from Flexson. Perfect for stereo pairs or as rear speakers in a surround sound setup.",
    features: [
        "Custom design for Sonos One, One SL, and Play:1",
        "Positions the speaker at the ideal listening height",
        "Clever cable management",
        "Available in black and white to match the speaker"
    ],
    specs: {
        "Compatibility": "Sonos One, One SL, Play:1",
        "Material": "Steel",
        "Height": "71.4 cm"
    }
  },
  {
    id: '3',
    brand: 'SANUS',
    name: 'SANUS ERA 100 height-adjustable stand',
    image: 'https://picsum.photos/seed/s3/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '124.99 - 214.99',
    href: '/products/3',
    hint: 'speaker stand black',
    description: "The height-adjustable stand for the Sonos Era 100 provides optimal audio performance. It is made of durable steel and aluminum and securely holds your speaker in place.",
    features: [
        "Height adjustable from 63cm to 106cm",
        "Press-fit cable management for a clean look",
        "Easy assembly",
        "Includes spikes and rubber pads for carpet and hard floors"
    ],
    specs: {
        "Compatibility": "Sonos Era 100",
        "Material": "Steel and Aluminum",
        "Height Adjustability": "63cm - 106cm"
    }
  },
  {
    id: '4',
    brand: 'SANUS',
    name: 'SANUS ERA 300 height-adjustable stand',
    image: 'https://picsum.photos/seed/s4/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '169.99 - 279.99',
    href: '/products/4',
    hint: 'speaker stand black',
    description: "Maximize your listening experience with the height-adjustable stand for the Sonos Era 300. This stand offers optimal placement and a slim, unobtrusive design.",
     features: [
        "Height adjustable for optimal positioning",
        "Integrated cable management",
        "Stable and secure construction",
        "Designed to blend seamlessly into your home"
    ],
    specs: {
        "Compatibility": "Sonos Era 300",
        "Material": "Steel and Aluminum",
        "Height Adjustability": "83cm - 117cm"
    }
  },
  {
    id: '5',
    brand: 'SANUS',
    name: 'SANUS ERA 100 Stand',
    image: 'https://picsum.photos/seed/s5/800/800',
    rating: 5,
    reviews: 1,
    questions: 0,
    price: '84.99',
    href: '/products/5',
    hint: 'speaker stand white',
    description: 'The SANUS WSS21 is a speaker stand for the Sonos Era 100, providing the optimal listening height. It is made of high-quality steel for stability and durability and blends seamlessly into any home decor.',
    features: [
        'Optimal listening height',
        'Integrated cable management',
        'Easy assembly',
        'Includes rubber feet and spikes for any floor type'
    ],
    specs: {
        'Compatibility': 'Sonos Era 100',
        'Material': 'Steel',
        'Height': '82.55 cm'
    }
  },
  {
    id: '6',
    brand: 'Flexson',
    name: 'Flexson ERA 300 Stand',
    image: 'https://picsum.photos/seed/s6/800/800',
    rating: 5,
    reviews: 1,
    questions: 0,
    price: '119.99',
    href: '/products/6',
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
    id: '7',
    brand: 'SANUS',
    name: 'SANUS ERA 300 wall mount',
    image: 'https://picsum.photos/seed/s7/800/800',
    rating: 5,
    reviews: 1,
    questions: 0,
    price: '54.99',
    href: '/products/7',
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
    id: '8',
    brand: 'Flexson',
    name: 'Flexson ERA 100 Stand',
    image: 'https://picsum.photos/seed/s8/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '69.99',
    href: '/products/8',
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
  }
];

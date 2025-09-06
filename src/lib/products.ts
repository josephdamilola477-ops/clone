
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
    price: '199.99',
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
    brand: 'FLEXSON',
    name: 'Flexson One/One SL/Play 1 Stand',
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
    name: 'SANUS ERA 100 Height-Adjustable Stand',
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
    name: 'SANUS ERA 300 Height-Adjustable Stand',
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
    brand: 'EcoFlow',
    name: 'EcoFlow DELTA 2',
    image: 'https://picsum.photos/seed/p1/800/800',
    rating: 4.5,
    reviews: 120,
    questions: 5,
    price: '999.00',
    href: '/products/5',
    hint: 'portable power',
    description: "The EcoFlow DELTA 2 is an essential power station for any household, providing you with security in any situation where you need power. It is fast-charging, durable, and ideal for home and on-the-go use.",
    features: [
        "1024Wh capacity",
        "1800W AC output (2700W Surge)",
        "Charged from 0-80% in 50 minutes",
        "Durable LFP battery with 3000+ cycles"
    ],
    specs: {
        "Capacity": "1024Wh",
        "AC Output": "1800W",
        "Ports": "15 outputs",
        "Weight": "12 kg"
    }
  },
  {
    id: '6',
    brand: 'EcoFlow',
    name: 'EcoFlow RIVER 2 Pro',
    image: 'https://picsum.photos/seed/p2/800/800',
    rating: 4.8,
    reviews: 98,
    questions: 3,
    price: '769.00',
    href: '/products/6',
    hint: 'portable power',
    description: "With its industry-leading charging speed, the RIVER 2 Pro is the ultimate portable power station for your off-grid adventures. With 768Wh capacity and 800W power, you can power multiple devices simultaneously.",
    features: [
        "Fully charged in 70 minutes",
        "768Wh capacity",
        "800W power",
        "LFP battery for up to 10 years of use"
    ],
    specs: {
        "Capacity": "768Wh",
        "AC Output": "800W",
        "Ports": "11 outputs",
        "Weight": "7.8 kg"
    }
  },
    {
    id: '7',
    brand: 'Anker',
    name: 'Anker 757 PowerHouse',
    image: 'https://picsum.photos/seed/p3/800/800',
    rating: 4.7,
    reviews: 250,
    questions: 12,
    price: '1,399.00',
    href: '/products/7',
    hint: 'portable power',
    description: "Equipped with a durable LiFePO4 battery that lasts for 3,000 charging cycles, the Anker 757 PowerHouse powers your devices every day for 10 years. A drop-proof unibody design and industry-leading components ensure a long lifespan.",
    features: [
        "1229Wh capacity, 1500W power",
        "Extremely durable LiFePO4 batteries",
        "HyperFlash™ technology charges to 80% in 1 hour",
        "Integrated light bar for ambient light"
    ],
    specs: {
        "Capacity": "1229Wh",
        "AC Output": "1500W",
        "Ports": "9 outputs",
        "Weight": "19.9 kg"
    }
  },
  {
    id: '8',
    brand: 'BLUETTI',
    name: 'BLUETTI AC200MAX',
    image: 'https://picsum.photos/seed/p4/800/800',
    rating: 4.6,
    reviews: 180,
    questions: 8,
    price: '1,899.00',
    href: '/products/8',
    hint: 'portable power',
    description: "The first modular, expandable BLUETTI power station. With an amazing 2048Wh of ultra-durable LFP cells and a 2,200W full-power pure sine wave inverter, the AC200MAX is a powerhouse on the go.",
    features: [
        "2048Wh capacity, expandable up to 8192Wh",
        "2200W AC inverter",
        "3500+ life cycles to 80% capacity",
        "16 outputs for various devices"
    ],
     specs: {
        "Capacity": "2048Wh",
        "AC Output": "2200W",
        "Ports": "16 outputs",
        "Weight": "28.1 kg"
    }
  },
  {
    id: '9',
    brand: 'EcoFlow',
    name: 'EcoFlow 400W Solar Panel',
    image: 'https://picsum.photos/seed/p5/800/800',
    rating: 4.9,
    reviews: 300,
    questions: 15,
    price: '849.00',
    href: '/products/9',
    hint: 'solar panel',
    description: "The portable 400W solar panel from EcoFlow is efficient and easy to use. With high solar output and an improved efficiency of 23%, you can charge your portable power station even faster.",
    features: [
        "400W power",
        "23% efficiency",
        "Foldable and portable",
        "Weatherproof with IP68 certification"
    ],
     specs: {
        "Power": "400W",
        "Efficiency": "23%",
        "Weight": "16 kg (with case)",
        "Dimensions (unfolded)": "105.8 x 236.5 x 2.5 cm"
    }
  },
  {
    id: '10',
    brand: 'Jackery',
    name: 'Jackery SolarSaga 100W',
    image: 'https://picsum.photos/seed/p6/800/800',
    rating: 4.7,
    reviews: 500,
    questions: 20,
    price: '299.00',
    href: '/products/10',
    hint: 'solar panel',
    description: "The Jackery SolarSaga 100W monocrystalline solar panel converts solar energy into renewable energy with a high conversion efficiency of up to 23%. It is ideal for outdoor activities and emergency use at home.",
    features: [
        "High conversion efficiency of up to 23%",
        "Lightweight and portable",
        "Two USB outputs for direct device charging",
        "Durable and splash-proof"
    ],
    specs: {
        "Power": "100W",
        "Efficiency": "23%",
        "Weight": "4.69 kg",
        "Outputs": "USB-A and USB-C"
    }
  },
  {
    id: '11',
    brand: 'Zendure',
    name: 'Zendure SuperBase Pro 2000',
    image: 'https://picsum.photos/seed/p7/800/800',
    rating: 4.5,
    reviews: 80,
    questions: 6,
    price: '1,799.00',
    href: '/products/11',
    hint: 'home battery',
    description: "The SuperBase Pro 2000 is a 2,096Wh power station that can be charged to 80% in just one hour. With 14 output ports and a 2,000W output, it is the perfect power solution for on the go, at home, or at work.",
    features: [
        "2096Wh capacity, 2000W AC output",
        "Charged to 80% in 1 hour",
        "Integrated 4G IoT and GPS",
        "Robust wheels and extendable handle for easy transport"
    ],
    specs: {
        "Capacity": "2096Wh",
        "AC Output": "2000W",
        "Ports": "14 outputs",
        "Weight": "21.2 kg"
    }
  },
  {
    id: '12',
    brand: 'EcoFlow',
    name: 'EcoFlow Smart Home Panel',
    image: 'https://picsum.photos/seed/p8/800/800',
    rating: 4.8,
    reviews: 45,
    questions: 4,
    price: '1,599.00',
    href: '/products/12',
    hint: 'home battery',
    description: "The EcoFlow Smart Home Panel is the heart of your home backup ecosystem. It integrates your DELTA Pro power station directly with your home, so you can power up to 10 of your home circuits during a power outage.",
    features: [
        "Integrates DELTA Pro into your home",
        "Smart energy management",
        "Control via the EcoFlow app",
        "Uninterruptible power supply during power outages"
    ],
    specs: {
        "Compatibility": "EcoFlow DELTA Pro",
        "Max. Power": "7200W",
        "Controllable Circuits": "10",
        "Voltage": "240V"
    }
  },
];

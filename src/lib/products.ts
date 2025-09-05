
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
    name: 'SANUS ERA 300 Standfuß',
    image: 'https://picsum.photos/seed/s1/800/800',
    rating: 5,
    reviews: 2,
    questions: 1,
    price: '199.99',
    href: '/products/1',
    hint: 'speaker stand',
    description: "Der SANUS WSS22 Standfuß wurde entwickelt, um den Sonos Era 300™ kabellosen Lautsprecher in der optimalen Hörhöhe zu platzieren und gleichzeitig perfekt in jede Wohnkultur zu passen. Hergestellt aus hochwertigem Stahl, bietet der WSS22 eine außergewöhnliche Stabilität und Langlebigkeit.",
    features: [
        "Platziert den Lautsprecher in der optimalen Hörhöhe",
        "Kabelmanagement für einen sauberen Look",
        "Einfache Montage in 15 Minuten",
        "Inklusive Gummifüße und höhenverstellbare Spikes für verschiedene Böden"
    ],
    specs: {
        "Kompatibilität": "Sonos Era 300",
        "Material": "Stahl und Aluminium",
        "Höhe": "83.82 cm",
        "Gewicht": "3.4 kg"
    }
  },
  {
    id: '2',
    brand: 'FLEXSON',
    name: 'Flexson One/One SL/Play 1 Standfuß',
    image: 'https://picsum.photos/seed/s2/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '39.00 - 79.00',
    href: '/products/2',
    hint: 'speaker stand white',
    description: "Stellen Sie Ihre Sonos One, One SL oder Play:1 Lautsprecher mit diesem maßgeschneiderten Standfuß von Flexson in der idealen Höhe auf. Perfekt für Stereo-Paare oder als hintere Lautsprecher in einem Surround-Sound-Setup.",
    features: [
        "Maßgeschneidertes Design für Sonos One, One SL und Play:1",
        "Positioniert den Lautsprecher in idealer Hörhöhe",
        "Clevere Kabelführung",
        "Erhältlich in Schwarz und Weiß, passend zum Lautsprecher"
    ],
    specs: {
        "Kompatibilität": "Sonos One, One SL, Play:1",
        "Material": "Stahl",
        "Höhe": "71.4 cm"
    }
  },
  {
    id: '3',
    brand: 'SANUS',
    name: 'SANUS ERA 100 höhenverstellbarer Standfuß',
    image: 'https://picsum.photos/seed/s3/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '124.99 - 214.99',
    href: '/products/3',
    hint: 'speaker stand black',
    description: "Der höhenverstellbare Standfuß für den Sonos Era 100 bietet eine optimale Audioleistung. Er ist aus strapazierfähigem Stahl und Aluminium gefertigt und hält Ihren Lautsprecher sicher an Ort und Stelle.",
    features: [
        "Höhenverstellbar von 63cm bis 106cm",
        "Press-Fit-Kabelmanagement für einen sauberen Look",
        "Einfache Montage",
        "Inklusive Spikes und Gummipads für Teppich- und Hartböden"
    ],
    specs: {
        "Kompatibilität": "Sonos Era 100",
        "Material": "Stahl und Aluminium",
        "Höhenverstellbarkeit": "63cm - 106cm"
    }
  },
  {
    id: '4',
    brand: 'SANUS',
    name: 'SANUS ERA 300 höhenverstellbarer Standfuß',
    image: 'https://picsum.photos/seed/s4/800/800',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '169.99 - 279.99',
    href: '/products/4',
    hint: 'speaker stand black',
    description: "Maximieren Sie Ihr Hörerlebnis mit dem höhenverstellbaren Standfuß für den Sonos Era 300. Dieser Standfuß bietet eine optimale Platzierung und ein schlankes, unauffälliges Design.",
     features: [
        "Höhenverstellbar für optimale Positionierung",
        "Integriertes Kabelmanagement",
        "Stabile und sichere Konstruktion",
        "Entwickelt, um sich nahtlos in Ihr Zuhause einzufügen"
    ],
    specs: {
        "Kompatibilität": "Sonos Era 300",
        "Material": "Stahl und Aluminium",
        "Höhenverstellbarkeit": "83cm - 117cm"
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
    price: '999,00',
    href: '/products/5',
    hint: 'portable power',
    description: "Die EcoFlow DELTA 2 ist eine unverzichtbare Powerstation für jeden Haushalt, die Ihnen in jeder Situation, in der Sie Strom benötigen, Sicherheit bietet. Sie ist schnell aufladbar, langlebig und ideal für den Heimgebrauch und unterwegs.",
    features: [
        "1024Wh Kapazität",
        "1800W AC-Ausgang (2700W Surge)",
        "In 50 Minuten von 0-80% aufgeladen",
        "Langlebige LFP-Batterie mit 3000+ Zyklen"
    ],
    specs: {
        "Kapazität": "1024Wh",
        "AC-Ausgang": "1800W",
        "Anschlüsse": "15 Ausgänge",
        "Gewicht": "12 kg"
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
    price: '769,00',
    href: '/products/6',
    hint: 'portable power',
    description: "Die RIVER 2 Pro ist mit ihrer branchenführenden Ladegeschwindigkeit die ultimative tragbare Powerstation für Ihre Off-Grid-Abenteuer. Mit 768Wh Kapazität und 800W Leistung können Sie mehrere Geräte gleichzeitig mit Strom versorgen.",
    features: [
        "In 70 Minuten vollständig aufgeladen",
        "768Wh Kapazität",
        "800W Leistung",
        "LFP-Batterie für bis zu 10 Jahre Nutzung"
    ],
    specs: {
        "Kapazität": "768Wh",
        "AC-Ausgang": "800W",
        "Anschlüsse": "11 Ausgänge",
        "Gewicht": "7.8 kg"
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
    price: '1.399,00',
    href: '/products/7',
    hint: 'portable power',
    description: "Ausgestattet mit einer langlebigen LiFePO4-Batterie, die 3.000 Ladezyklen übersteht, versorgt die Anker 757 PowerHouse Ihre Geräte jeden Tag für 10 Jahre. Ein Sturz-sicheres Unibody-Design und branchenführende Komponenten gewährleisten eine lange Lebensdauer.",
    features: [
        "1229Wh Kapazität, 1500W Leistung",
        "Extrem langlebige LiFePO4-Batterien",
        "HyperFlash™-Technologie lädt in 1 Stunde auf 80%",
        "Integrierte Lichtleiste für Umgebungslicht"
    ],
    specs: {
        "Kapazität": "1229Wh",
        "AC-Ausgang": "1500W",
        "Anschlüsse": "9 Ausgänge",
        "Gewicht": "19.9 kg"
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
    price: '1.899,00',
    href: '/products/8',
    hint: 'portable power',
    description: "Der erste modulare, erweiterbare BLUETTI Power-Station. Mit erstaunlichen 2048Wh ultra-haltbaren LFP-Zellen und einem 2.200W Full-Power-Wechselrichter mit reiner Sinuswelle ist der AC200MAX ein Kraftpaket für unterwegs.",
    features: [
        "2048Wh Kapazität, erweiterbar auf bis zu 8192Wh",
        "2200W AC-Wechselrichter",
        "3500+ Lebenszyklen bis 80% Kapazität",
        "16 Ausgänge für verschiedene Geräte"
    ],
     specs: {
        "Kapazität": "2048Wh",
        "AC-Ausgang": "2200W",
        "Anschlüsse": "16 Ausgänge",
        "Gewicht": "28.1 kg"
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
    price: '849,00',
    href: '/products/9',
    hint: 'solar panel',
    description: "Das tragbare 400W-Solarmodul von EcoFlow ist effizient und einfach zu bedienen. Mit einer hohen Solarleistung und einem verbesserten Wirkungsgrad von 23 % können Sie Ihre tragbare Powerstation noch schneller aufladen.",
    features: [
        "400W Leistung",
        "23% Wirkungsgrad",
        "Faltbar und tragbar",
        "Wetterfest mit IP68-Zertifizierung"
    ],
     specs: {
        "Leistung": "400W",
        "Wirkungsgrad": "23%",
        "Gewicht": "16 kg (mit Tasche)",
        "Abmessungen (aufgeklappt)": "105.8 x 236.5 x 2.5 cm"
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
    price: '299,00',
    href: '/products/10',
    hint: 'solar panel',
    description: "Das Jackery SolarSaga 100W monokristalline Solarpanel wandelt mit einem hohen Umwandlungswirkungsgrad von bis zu 23% Sonnenenergie in erneuerbare Energie um. Es ist ideal für Outdoor-Aktivitäten und den Notfalleinsatz zu Hause.",
    features: [
        "Hoher Umwandlungswirkungsgrad von bis zu 23%",
        "Leicht und tragbar",
        "Zwei USB-Ausgänge zum direkten Laden von Geräten",
        "Langlebig und spritzwassergeschützt"
    ],
    specs: {
        "Leistung": "100W",
        "Wirkungsgrad": "23%",
        "Gewicht": "4.69 kg",
        "Ausgänge": "USB-A und USB-C"
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
    price: '1.799,00',
    href: '/products/11',
    hint: 'home battery',
    description: "Die SuperBase Pro 2000 ist eine 2.096Wh Powerstation, die in nur einer Stunde auf 80 % aufgeladen werden kann. Mit 14 Ausgangsports und einem 2.000W-Ausgang ist sie die perfekte Stromversorgungslösung für unterwegs, zu Hause oder bei der Arbeit.",
    features: [
        "2096Wh Kapazität, 2000W AC-Ausgang",
        "In 1 Stunde auf 80% aufgeladen",
        "Integriertes 4G IoT und GPS",
        "Robuste Räder und ausziehbarer Griff für einfachen Transport"
    ],
    specs: {
        "Kapazität": "2096Wh",
        "AC-Ausgang": "2000W",
        "Anschlüsse": "14 Ausgänge",
        "Gewicht": "21.2 kg"
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
    price: '1.599,00',
    href: '/products/12',
    hint: 'home battery',
    description: "Das EcoFlow Smart Home Panel ist das Herzstück Ihres Heim-Backup-Ökosystems. Es integriert Ihre DELTA Pro Powerstation direkt mit Ihrem Zuhause, sodass Sie bei einem Stromausfall bis zu 10 Ihrer Heimstromkreise mit Strom versorgen können.",
    features: [
        "Bindet DELTA Pro in Ihr Zuhause ein",
        "Intelligentes Energiemanagement",
        "Steuerung über die EcoFlow-App",
        "Unterbrechungsfreie Stromversorgung bei Stromausfällen"
    ],
    specs: {
        "Kompatibilität": "EcoFlow DELTA Pro",
        "Max. Leistung": "7200W",
        "Steuerbare Stromkreise": "10",
        "Spannung": "240V"
    }
  },
];

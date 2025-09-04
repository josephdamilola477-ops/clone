import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { MessageCircle, Star } from 'lucide-react';

const products = [
  {
    brand: 'SANUS',
    name: 'SANUS ERA 300 Standfuß',
    image: 'https://picsum.photos/seed/s1/400/400',
    rating: 5,
    reviews: 2,
    questions: 1,
    price: '199.99',
    href: '#',
    hint: 'speaker stand',
  },
  {
    brand: 'FLEXSON',
    name: 'Flexson One/One SL/Play 1 Standfuß',
    image: 'https://picsum.photos/seed/s2/400/400',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '39.00 - 79.00',
    href: '#',
    hint: 'speaker stand white',
  },
  {
    brand: 'SANUS',
    name: 'SANUS ERA 100 höhenverstellbarer Standfuß',
    image: 'https://picsum.photos/seed/s3/400/400',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '124.99 - 214.99',
    href: '#',
    hint: 'speaker stand black',
  },
  {
    brand: 'SANUS',
    name: 'SANUS ERA 300 höhenverstellbarer Standfuß',
    image: 'https://picsum.photos/seed/s4/400/400',
    rating: 0,
    reviews: 0,
    questions: 0,
    price: '169.99 - 279.99',
    href: '#',
    hint: 'speaker stand black',
  },
  {
    brand: 'EcoFlow',
    name: 'EcoFlow DELTA 2',
    image: 'https://picsum.photos/seed/p1/400/400',
    rating: 4.5,
    reviews: 120,
    questions: 5,
    price: '999,00',
    href: '#',
    hint: 'portable power',
  },
  {
    brand: 'EcoFlow',
    name: 'EcoFlow RIVER 2 Pro',
    image: 'https://picsum.photos/seed/p2/400/400',
    rating: 4.8,
    reviews: 98,
    questions: 3,
    price: '769,00',
    href: '#',
    hint: 'portable power',
  },
    {
    brand: 'Anker',
    name: 'Anker 757 PowerHouse',
    image: 'https://picsum.photos/seed/p3/400/400',
    rating: 4.7,
    reviews: 250,
    questions: 12,
    price: '1.399,00',
    href: '#',
    hint: 'portable power',
  },
  {
    brand: 'BLUETTI',
    name: 'BLUETTI AC200MAX',
    image: 'https://picsum.photos/seed/p4/400/400',
    rating: 4.6,
    reviews: 180,
    questions: 8,
    price: '1.899,00',
    href: '#',
    hint: 'portable power',
  },
  {
    brand: 'EcoFlow',
    name: 'EcoFlow 400W Solar Panel',
    image: 'https://picsum.photos/seed/p5/400/400',
    rating: 4.9,
    reviews: 300,
    questions: 15,
    price: '849,00',
    href: '#',
    hint: 'solar panel',
  },
  {
    brand: 'Jackery',
    name: 'Jackery SolarSaga 100W',
    image: 'https://picsum.photos/seed/p6/400/400',
    rating: 4.7,
    reviews: 500,
    questions: 20,
    price: '299,00',
    href: '#',
    hint: 'solar panel',
  },
  {
    brand: 'Zendure',
    name: 'Zendure SuperBase Pro 2000',
    image: 'https://picsum.photos/seed/p7/400/400',
    rating: 4.5,
    reviews: 80,
    questions: 6,
    price: '1.799,00',
    href: '#',
    hint: 'home battery',
  },
  {
    brand: 'EcoFlow',
    name: 'EcoFlow Smart Home Panel',
    image: 'https://picsum.photos/seed/p8/400/400',
    rating: 4.8,
    reviews: 45,
    questions: 4,
    price: '1.599,00',
    href: '#',
    hint: 'home battery',
  },
];

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        ))}
        {hasHalfStar && <Star key="half" className="h-4 w-4 text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300 fill-gray-300" />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">
        {reviews > 0 ? `${rating.toFixed(1)} | (${reviews})` : 'Keine Bewertungen'}
      </span>
    </div>
  );
};


export function Products() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Kaufen Sie unsere Produkte</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Finden Sie die perfekte Energielösung für Ihre Bedürfnisse.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="group relative block overflow-hidden">
              <div className="relative aspect-[1/1] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={product.hint}
                />
              </div>
              <div className="p-4 bg-card text-left">
                <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{product.brand}</p>
                    <div className="flex items-center gap-1">
                        <span className="h-3 w-3 rounded-full bg-black border-2 border-white ring-1 ring-gray-400"></span>
                        <span className="h-3 w-3 rounded-full bg-gray-200 border-2 border-white ring-1 ring-gray-400"></span>
                    </div>
                </div>
                <h3 className="mt-2 text-sm font-medium text-foreground h-10">{product.name}</h3>
                
                <div className="mt-2">
                    <StarRating rating={product.rating} reviews={product.reviews} />
                </div>
                
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    <span>{product.questions > 0 ? `${product.questions} Frage${product.questions > 1 ? 'n' : ''}` : 'Keine Fragen'}</span>
                </div>

                <p className="mt-3 font-semibold text-foreground text-base">€{product.price.replace(' - ', ' - €')}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

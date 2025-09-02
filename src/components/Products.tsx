import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'EcoFlow DELTA 2',
    image: 'https://picsum.photos/seed/p1/400/400',
    price: '999,00',
    href: '#',
    hint: 'portable power',
  },
  {
    name: 'EcoFlow RIVER 2 Pro',
    image: 'https://picsum.photos/seed/p2/400/400',
    price: '769,00',
    href: '#',
    hint: 'portable power',
  },
    {
    name: 'Anker 757 PowerHouse',
    image: 'https://picsum.photos/seed/p3/400/400',
    price: '1.399,00',
    href: '#',
    hint: 'portable power',
  },
  {
    name: 'BLUETTI AC200MAX',
    image: 'https://picsum.photos/seed/p4/400/400',
    price: '1.899,00',
    href: '#',
    hint: 'portable power',
  },
  {
    name: 'EcoFlow 400W Solar Panel',
    image: 'https://picsum.photos/seed/p5/400/400',
    price: '849,00',
    href: '#',
    hint: 'solar panel',
  },
  {
    name: 'Jackery SolarSaga 100W',
    image: 'https://picsum.photos/seed/p6/400/400',
    price: '299,00',
    href: '#',
    hint: 'solar panel',
  },
  {
    name: 'Zendure SuperBase Pro 2000',
    image: 'https://picsum.photos/seed/p7/400/400',
    price: '1.799,00',
    href: '#',
    hint: 'home battery',
  },
  {
    name: 'EcoFlow Smart Home Panel',
    image: 'https://picsum.photos/seed/p8/400/400',
    price: '1.599,00',
    href: '#',
    hint: 'home battery',
  },
  {
    name: 'Anker SOLIX C1000',
    image: 'https://picsum.photos/seed/p9/400/400',
    price: '1.199,00',
    href: '#',
    hint: 'portable power',
  },
  {
    name: 'BLUETTI EP500 Pro',
    image: 'https://picsum.photos/seed/p10/400/400',
    price: '4.999,00',
    href: '#',
    hint: 'home battery',
  },
  {
    name: 'EcoFlow DELTA Pro',
    image: 'https://picsum.photos/seed/p11/400/400',
    price: '3.999,00',
    href: '#',
    hint: 'home battery',
  },
  {
    name: 'Jackery Explorer 1000',
    image: 'https://picsum.photos/seed/p12/400/400',
    price: '1.199,00',
    href: '#',
    hint: 'portable power',
  },
];

export function Products() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Shop Our Products</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect power solution for your needs.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="group relative block border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={product.hint}
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="text-lg font-semibold text-foreground truncate">{product.name}</h3>
                <p className="mt-2 font-bold text-primary text-xl">€{product.price}</p>
                <Button className="w-full mt-4">Add to Cart</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

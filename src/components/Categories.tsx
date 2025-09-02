import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Portable Power Stations',
    image: 'https://picsum.photos/seed/cat1/400/500',
    href: '#',
    hint: 'portable power',
  },
  {
    name: 'Home Battery Backup',
    image: 'https://picsum.photos/seed/cat2/400/500',
    href: '#',
    hint: 'home battery',
  },
  {
    name: 'Solar Panels',
    image: 'https://picsum.photos/seed/cat3/400/500',
    href: '#',
    hint: 'solar panels',
  },
];

export function Categories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Find the perfect power solution for your needs.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group relative block">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={category.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                <div className="mt-2 flex items-center text-white text-sm font-medium group-hover:underline">
                    Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full">
      <Image
        src="https://picsum.photos/seed/hero/1800/800"
        alt="Person in a van with a portable power station"
        fill
        className="object-cover"
        priority
        data-ai-hint="camping power station"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8 md:p-12">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg text-foreground max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
            Power Your Life, Anywhere
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our portable power stations for life's greatest adventures.
          </p>
          <Button size="lg" className="mt-8">
            Shop All Products
          </Button>
        </div>
      </div>
    </section>
  );
}

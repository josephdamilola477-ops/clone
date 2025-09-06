import Image from 'next/image';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-[700px] w-full flex items-center justify-center">
      <Image
        src="https://picsum.photos/seed/hero/1800/800"
        alt="View from a van of a family camping with a portable power station"
        fill
        className="object-cover"
        priority
        data-ai-hint="camping power station"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center animate-fade-in">
        <Button size="lg" variant="outline" className="bg-white/90 text-foreground hover:bg-white text-lg font-bold py-6 px-8 rounded-sm animate-slide-in-up">
            DISCOVER ECOFLOW PRODUCTS
        </Button>
      </div>
    </section>
  );
}

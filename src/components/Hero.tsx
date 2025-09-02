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
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          Power Your Life, Anywhere
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Discover our range of portable power stations and solar solutions.
        </p>
        <Button size="lg" className="mt-8">
          Shop Now
        </Button>
      </div>
    </section>
  );
}

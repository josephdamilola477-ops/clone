import Image from 'next/image';
import { Button } from './ui/button';

export function Balkonkraftwerk() {
  return (
    <section className="relative h-[60vh] min-h-[400px] md:h-[500px] w-full flex items-center justify-center text-white my-12">
      <Image
        src="https://picsum.photos/seed/balkon/1800/600"
        alt="EcoFlow Balcony Power Station Sets"
        fill
        className="object-cover"
        data-ai-hint="balcony power station"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">EcoFlow Balcony Power Station Sets</h2>
        <Button size="lg" variant="outline" className="mt-6 bg-white text-foreground hover:bg-gray-200 text-base font-bold py-5 px-8 rounded-none">
            TO THE BUNDLES
        </Button>
      </div>
    </section>
  );
}

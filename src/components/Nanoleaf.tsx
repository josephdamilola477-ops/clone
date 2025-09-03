import Image from 'next/image';
import { Button } from './ui/button';

export function Nanoleaf() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-2">
            <Image
              src="https://picsum.photos/seed/nanoleaf-room/800/600"
              alt="Nanoleaf light panels in a living room"
              width={800}
              height={600}
              className="rounded-none w-full h-auto"
              data-ai-hint="smart light panels room"
            />
          </div>
          <div className="md:order-1">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">MARCMAX MEDIA RECOMMENDS</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-800">Nanoleaf</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Nanoleaf is a pioneer in the smart home industry, paving the way for new possibilities by continuously rethinking and evolving spaces. We achieve this through the maxim: Never do what's already on the market, do it better.
            </p>
            <Button size="lg" className="mt-8 bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">
              TO THE PRODUCTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Button } from './ui/button';
import { MessageSquareText } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <Image
              src="https://picsum.photos/seed/about-us/800/600"
              alt="Man in a warehouse"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
              data-ai-hint="warehouse portrait"
            />
            <div className="absolute bottom-4 left-4 space-y-2">
                <Button className="rounded-full h-14 w-14 shadow-lg bg-gray-800 hover:bg-gray-700 text-white">
                    <MessageSquareText size={24} />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 justify-center items-center text-xs">1</span>
                    </span>
                </Button>
                <Button className="rounded-full h-12 px-6 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Rückrufservice
                </Button>
            </div>
          </div>
          <div className="bg-stone-100 p-12 md:p-20 flex flex-col justify-center rounded-r-lg">
            <h2 className="text-4xl font-bold text-gray-800">Über uns</h2>
            <p className="mt-4 text-lg text-gray-600">
              Wir streben danach, Ihnen durch unsere Erfahrung und unseren Enthusiasmus Produkte von höchster Qualität zu liefern.
            </p>
            <Button size="lg" className="mt-8 bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base w-fit">
              ÜBER MARCMAX-MEDIA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

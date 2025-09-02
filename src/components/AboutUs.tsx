import Image from 'next/image';
import { Button } from './ui/button';
import { MessageSquareText } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-lg overflow-hidden shadow-lg">
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <Image
              src="https://picsum.photos/seed/about-us/800/600"
              alt="Man in a warehouse"
              layout="fill"
              objectFit="cover"
              data-ai-hint="warehouse portrait"
            />
            <div className="absolute bottom-6 left-6 space-y-3">
                <Button className="rounded-full h-12 shadow-lg bg-gray-800 hover:bg-gray-700 text-white pl-4 pr-5">
                    <div className="relative">
                        <MessageSquareText size={20} />
                         <span className="absolute -top-2 -right-2 flex h-4 w-4">
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 justify-center items-center text-xs text-white">1</span>
                        </span>
                    </div>
                    <span>Chat</span>
                </Button>
                <Button className="rounded-full h-12 px-6 shadow-lg bg-green-600 hover:bg-green-700 text-white font-semibold">
                    Rückrufservice
                </Button>
            </div>
          </div>
          <div className="bg-[#f5f1e8] p-12 md:p-20 flex flex-col justify-center">
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

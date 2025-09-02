import Image from 'next/image';
import { Button } from './ui/button';
import { MessageSquareText } from 'lucide-react';

export function Nanoleaf() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">MARCMAX MEDIA RECOMMENDS</p>
            <h2 className="text-5xl font-bold mt-2 text-gray-800">Nanoleaf</h2>
            <p className="mt-4 text-lg text-gray-600">
              Nanoleaf is a pioneer in the smart home industry, paving the way for new possibilities by continuously rethinking and evolving spaces. We achieve this through the maxim: Never do what's already on the market, do it better.
            </p>
            <Button size="lg" className="mt-8 bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">
              TO THE PRODUCTS
            </Button>
            <div className="mt-8 space-y-3">
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
                  Callback service
              </Button>
          </div>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/nanoleaf-room/800/600"
              alt="Nanoleaf light panels in a living room"
              width={800}
              height={600}
              className="rounded-none"
              data-ai-hint="smart light panels room"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

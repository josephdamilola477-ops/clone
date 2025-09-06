import Image from 'next/image';
import { Button } from './ui/button';
import { MessageSquareText } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-0 shadow-lg">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <Image
              src="https://picsum.photos/seed/about-us/800/600"
              alt="Man in a warehouse"
              layout="fill"
              objectFit="cover"
              data-ai-hint="warehouse portrait"
            />
          </div>
          <div className="bg-[#f5f1e8] p-8 sm:p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              We strive to bring you products of the highest quality through our experience and enthusiasm.
            </p>
            <Button size="lg" className="mt-8 bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base w-fit">
              ABOUT MARCMAX-MEDIA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import Image from 'next/image';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselSlides = [
    {
        image: "https://picsum.photos/seed/nanoleaf-bg/1800/600",
        alt: "Nanoleaf wood-look smart lighting panels on a wall",
        hint: "smart light panels"
    },
    {
        image: "https://picsum.photos/seed/nanoleaf-2/1800/600",
        alt: "Colorful Nanoleaf light panels in a geometric pattern",
        hint: "colorful light panels"
    },
    {
        image: "https://picsum.photos/seed/nanoleaf-3/1800/600",
        alt: "Nanoleaf light strips casting ambient light in a room",
        hint: "light strips room"
    }
]

export function Nanoleaf() {
  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-[600px] w-full flex items-center text-white my-12">
        <Carousel 
            className="w-full h-full"
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
            ]}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent className="w-full h-full">
                {carouselSlides.map((slide, index) => (
                    <CarouselItem key={index} className="w-full h-full">
                        <Image
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            data-ai-hint={slide.hint}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 text-white z-20" />
            <CarouselNext className="absolute right-4 text-white z-20" />
        </Carousel>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md">
          <p className="text-sm font-semibold tracking-wider uppercase">NEU EINGETROFFEN</p>
          <h2 className="text-5xl font-bold mt-2">Nanoleaf</h2>
          <p className="mt-4 text-lg">
            Intelligente Beleuchtungsdekore in Holzoptik
          </p>
          <Button size="lg" variant="outline" className="mt-8 bg-white text-foreground hover:bg-gray-200 text-base font-bold py-5 px-8 rounded-none">
            ENTDECKEN
          </Button>
        </div>
      </div>
    </section>
  );
}

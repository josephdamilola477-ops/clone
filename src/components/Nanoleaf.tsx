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
        image: "https://picsum.photos/seed/nanoleaf-bg/1800/700",
        alt: "Nanoleaf wood-look smart lighting panels on a wall",
        hint: "smart light panels",
        subtitle: "NEU EINGETROFFEN",
        title: "Nanoleaf",
        description: "Intelligente Beleuchtungsdekore in Holzoptik",
        buttonText: "ENTDECKEN"
    },
    {
        image: "https://picsum.photos/seed/nanoleaf-2/1800/700",
        alt: "Colorful Nanoleaf light panels in a geometric pattern",
        hint: "colorful light panels",
        subtitle: "SMART HOME",
        title: "Smarte Lichter",
        description: "Verwandle deinen Raum mit intelligentem Licht.",
        buttonText: "MEHR ERFAHREN"
    },
    {
        image: "https://picsum.photos/seed/nanoleaf-3/1800/700",
        alt: "Nanoleaf light strips casting ambient light in a room",
        hint: "light strips room",
        subtitle: "AMBIENTE",
        title: "Light Strips",
        description: "Setze Akzente mit flexiblen Light Strips.",
        buttonText: "JETZT SHOPPEN"
    }
]

export function Nanoleaf() {
  return (
    <section className="w-full my-12">
        <Carousel 
            className="w-full"
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
            ]}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {carouselSlides.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-[70vh] min-h-[500px] md:h-[600px] w-full flex items-center text-white">
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                className="object-cover"
                                data-ai-hint={slide.hint}
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-md">
                                <p className="text-sm font-semibold tracking-wider uppercase">{slide.subtitle}</p>
                                <h2 className="text-5xl font-bold mt-2">{slide.title}</h2>
                                <p className="mt-4 text-lg">
                                    {slide.description}
                                </p>
                                <Button size="lg" variant="outline" className="mt-8 bg-white text-foreground hover:bg-gray-200 text-base font-bold py-5 px-8 rounded-none">
                                    {slide.buttonText}
                                </Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 z-20 text-white" />
            <CarouselNext className="absolute right-4 z-20 text-white" />
        </Carousel>
    </section>
  );
}

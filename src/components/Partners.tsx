"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  { name: 'Amper', logo: 'https://picsum.photos/seed/logo1/150/40?grayscale' },
  { name: 'Akku...', logo: 'https://picsum.photos/seed/logo2/150/40?grayscale' },
  { name: 'Hisense', logo: 'https://picsum.photos/seed/logo3/150/40?grayscale' },
  { name: 'Tibber', logo: 'https://picsum.photos/seed/logo4/150/40?grayscale' },
  { name: 'Anker', logo: 'https://picsum.photos/seed/logo5/150/40?grayscale' },
  { name: 'Homey', logo: 'https://picsum.photos/seed/logo6/150/40?grayscale' },
  { name: 'Synology', logo: 'https://picsum.photos/seed/logo7/150/40?grayscale' },
  { name: 'Shelly', logo: 'https://picsum.photos/seed/logo8/150/40?grayscale' },
  { name: 'Tado', logo: 'https://picsum.photos/seed/logo9/150/40?grayscale' },
];

export function Partners() {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">
                    Compatible with your favorite brands
                </h2>
                <div className="mt-10">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                         plugins={[
                            Autoplay({
                              delay: 2000,
                              stopOnInteraction: false,
                            }),
                          ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {partners.map((partner, index) => (
                                <CarouselItem key={index} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                                    <div className="flex justify-center p-4">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={120}
                                            height={30}
                                            className="object-contain"
                                            data-ai-hint="logo"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

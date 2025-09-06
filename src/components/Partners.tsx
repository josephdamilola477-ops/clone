"use client";
import Image from "next/image";

const partners = [
  { name: 'Anker', logo: 'https://picsum.photos/seed/anker/150/50?grayscale' },
  { name: 'Dometic', logo: 'https://picsum.photos/seed/dometic/150/50?grayscale' },
  { name: 'Ecoflow', logo: 'https://picsum.photos/seed/ecoflow-logo/150/50?grayscale' },
  { name: 'Hisense', logo: 'https://picsum.photos/seed/hisense/150/50?grayscale' },
  { name: 'Honda', logo: 'https://picsum.photos/seed/honda/150/50?grayscale' },
  { name: 'Roborock', logo: 'https://picsum.photos/seed/roborock/150/50?grayscale' },
  { name: 'Sonos', logo: 'https://picsum.photos/seed/sonos/150/50?grayscale' },
  { name: 'Synology', logo: 'https://picsum.photos/seed/synology/150/50?grayscale' },
  { name: 'Ugreen', logo: 'https://picsum.photos/seed/ugreen/150/50?grayscale' },
  { name: 'Zendure', logo: 'https://picsum.photos/seed/zendure/150/50?grayscale' },
];

export function Partners() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800">MarcMax-Media</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Specialist dealer for high-quality electronics & technology products - selected and tested by experts.
                    </p>
                </div>

                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">Our Brands</h3>
                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-8 items-center justify-center">
                      {partners.slice(0, 7).map((partner) => (
                          <div key={partner.name} className="flex justify-center">
                              <Image
                                  src={partner.logo}
                                  alt={partner.name}
                                  width={140}
                                  height={40}
                                  className="object-contain"
                                  data-ai-hint="logo"
                              />
                          </div>
                      ))}
                  </div>
                   <div className="mt-8 flex justify-center">
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
                        {partners.slice(7).map((partner) => (
                            <div key={partner.name} className="flex justify-center">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={140}
                                    height={40}
                                    className="object-contain"
                                    data-ai-hint="logo"
                                />
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}

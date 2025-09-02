import Image from "next/image";

const partners = [
  { name: 'Partner 1', logo: 'https://picsum.photos/seed/logo1/150/50' },
  { name: 'Partner 2', logo: 'https://picsum.photos/seed/logo2/150/50' },
  { name: 'Partner 3', logo: 'https://picsum.photos/seed/logo3/150/50' },
  { name: 'Partner 4', logo: 'https://picsum.photos/seed/logo4/150/50' },
  { name: 'Partner 5', logo: 'https://picsum.photos/seed/logo5/150/50' },
  { name: 'Partner 6', logo: 'https://picsum.photos/seed/logo6/150/50' },
];

export function Partners() {
    return (
        <section className="py-16 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-2xl font-semibold text-muted-foreground">
                    Trusted by industry leaders
                </h2>
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex justify-center">
                             <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={150}
                                height={50}
                                className="object-contain"
                                data-ai-hint="logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

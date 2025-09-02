import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function ProductHighlight() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
             <Image
              src="https://picsum.photos/seed/product1/600/500"
              alt="Portable Power Station"
              width={600}
              height={500}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="power station"
            />
          </div>
          <div className="bg-secondary p-8 rounded-lg">
            <Badge variant="outline" className="mb-2 bg-white">PowerOcean DC Fit</Badge>
            <h3 className="text-3xl font-bold">Retrofit Your Home with Solar Battery Storage</h3>
            <p className="mt-4 text-muted-foreground">
              Directly use solar energy from your existing system, day and night.
            </p>
            <Button variant="outline" className="mt-8 bg-background">Learn More</Button>
          </div>
        </div>
         <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          <div className="md:order-2">
            <Image
              src="https://picsum.photos/seed/product2/600/500"
              alt="Solar Panel"
              width={600}
              height={500}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="solar panel grass"
            />
          </div>
          <div className="md:order-1 bg-secondary p-8 rounded-lg">
             <Badge variant="outline" className="mb-2 bg-white">PowerStream</Badge>
            <h3 className="text-3xl font-bold">Balcony Solar System With Portable Power Station</h3>
            <p className="mt-4 text-muted-foreground">
              The world's first balcony solar system that provides you with energy during the day and saves it for the night.
            </p>
            <Button variant="outline" className="mt-8 bg-background">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

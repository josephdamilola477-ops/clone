import Image from 'next/image';
import { Button } from './ui/button';

export function ProductHighlight() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Reliable power for your home, outdoor adventures, and professional work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://picsum.photos/seed/product1/600/600"
              alt="Portable Power Station"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              data-ai-hint="power station"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">PowerHub Delta Pro</h3>
            <p className="mt-4 text-muted-foreground">
              The DELTA Pro is the next leap forward in portable power technology, offering you power security and independence, wherever you are.
            </p>
            <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                    <CheckIcon className="text-primary" />
                    <span>3.6kWh expandable capacity</span>
                </li>
                 <li className="flex items-center gap-2">
                    <CheckIcon className="text-primary" />
                    <span>3600W AC output, 7200W surge</span>
                </li>
                 <li className="flex items-center gap-2">
                    <CheckIcon className="text-primary" />
                    <span>Multi-charge from AC, solar, and EV stations</span>
                </li>
            </ul>
            <Button className="mt-8">Learn More</Button>
          </div>
        </div>
         <div className="grid md:grid-cols-2 gap-8 items-center mt-24">
          <div className="md:order-2">
            <Image
              src="https://picsum.photos/seed/product2/600/600"
              alt="Solar Panel"
              width={600}
              height={600}
              className="rounded-lg object-cover"
              data-ai-hint="solar panel"
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-2xl font-bold">400W Solar Panel</h3>
            <p className="mt-4 text-muted-foreground">
              Our 400W portable solar panel offers high solar output, conversion efficiency, and a convenient folding design so it’s ready to grab and go.
            </p>
             <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                    <CheckIcon className="text-primary" />
                    <span>Portable & lightweight</span>
                </li>
                 <li className="flex items-center gap-2">
                    <CheckIcon className="text-primary" />
                    <span>23% conversion rate</span>
                </li>
                 <li className="flex items-center gap-2">
                    <CheckIcon className="text-primary" />
                    <span>Durable with IP68 waterproof rating</span>
                </li>
            </ul>
            <Button className="mt-8">Shop Solar</Button>
          </div>
        </div>
      </div>
    </section>
  );
}


function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
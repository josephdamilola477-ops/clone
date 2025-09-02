import Image from 'next/image';
import { Button } from './ui/button';

export function Nanoleaf() {
  return (
    <section className="relative h-[70vh] min-h-[500px] md:h-[600px] w-full flex items-center text-white my-12">
      <Image
        src="https://picsum.photos/seed/nanoleaf-bg/1800/600"
        alt="Nanoleaf wood-look smart lighting panels on a wall"
        fill
        className="object-cover"
        data-ai-hint="smart light panels"
      />
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

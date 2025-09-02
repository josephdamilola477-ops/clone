import Image from 'next/image';
import { Button } from './ui/button';

export function Location() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full flex items-center">
      <Image
        src="https://picsum.photos/seed/map/1800/600"
        alt="Map showing warehouse location"
        fill
        className="object-cover"
        data-ai-hint="map location"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 max-w-md shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800">
            MarcMax-Media collection warehouse Bietigheim-Bissingen
          </h2>
          <p className="mt-4 text-sm font-semibold tracking-wider uppercase text-muted-foreground">PICKUP</p>
          <div className="mt-6 border-t pt-6">
            <p className="font-semibold text-gray-800">Theisinger warehouse logistics</p>
            <p className="mt-2 text-gray-600">Stuttgarter Str. 69, 74321</p>
            <p className="text-gray-600">Bietigheim-Bissingen</p>
            <p className="mt-4 text-gray-600">Monday - Friday: 8:00 - 16:00</p>
          </div>
          <Button size="lg" className="w-full mt-6 bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">
            CALCULATE ROUTE
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from './ui/button';

export function Location() {
  return (
    <section className="relative h-[80vh] md:h-[60vh] min-h-[600px] w-full flex items-center">
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Stuttgarter%20Str.%2069,%2074321%20Bietigheim-Bissingen&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 md:p-8 max-w-md shadow-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            MarcMax-Media Abhol-Lager Bietigheim-Bissingen
          </h2>
          <p className="mt-4 text-sm font-semibold tracking-wider uppercase text-muted-foreground">ABHOLUNG</p>
          <div className="mt-6 border-t pt-6">
            <p className="font-semibold text-gray-800">Theisinger Lagerlogistik</p>
            <p className="mt-2 text-gray-600">Stuttgarter Str. 69, 74321</p>
            <p className="text-gray-600">Bietigheim-Bissingen</p>
            <p className="mt-4 text-gray-600">Montag - Freitag: 8:00 - 16:00</p>
          </div>
          <Button size="lg" className="w-full mt-6 bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">
            ROUTE BERECHNEN
          </Button>
        </div>
      </div>
    </section>
  );
}

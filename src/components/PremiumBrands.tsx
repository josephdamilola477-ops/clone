import Image from 'next/image';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageSquareText } from 'lucide-react';

export function PremiumBrands() {
  return (
    <section className="bg-[#f5f1e8] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our premium brands</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-medium text-gray-800 py-6">SONOS</AccordionTrigger>
                <AccordionContent>
                  Sonos is an American developer and manufacturer of audio products best known for its multi-room audio products.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-medium text-gray-800 py-6">EcoFlow</AccordionTrigger>
                <AccordionContent>
                  EcoFlow is a portable power and renewable energy solutions company.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-medium text-gray-800 py-6">Nanoleaf</AccordionTrigger>
                <AccordionContent>
                  Nanoleaf is a technology and IoT company changing the world with the most innovative smart home solutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-medium text-gray-800 py-6">ANCHOR</AccordionTrigger>
                <AccordionContent>
                  Anker Innovations is a Chinese electronics company that designs, develops, and sells consumer electronics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="absolute top-full left-0 mt-12 space-x-3 flex">
              <Button className="rounded-full h-12 shadow-lg bg-gray-800 hover:bg-gray-700 text-white pl-4 pr-5">
                <div className="relative">
                  <MessageSquareText size={20} />
                </div>
                <span>Chat</span>
              </Button>
              <Button className="rounded-full h-12 px-6 shadow-lg bg-green-600 hover:bg-green-700 text-white font-semibold">
                Callback service
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/sonos-speaker/800/600"
              alt="Sonos speaker on a shelf"
              width={800}
              height={600}
              className="rounded-none"
              data-ai-hint="speaker shelf"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

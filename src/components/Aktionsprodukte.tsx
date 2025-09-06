import Image from 'next/image';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';

const products = [
    {
        name: 'EcoFlow DELTA Pro Extra Battery 3600 Wh',
        price: '1,249.00',
        originalPrice: '1,579.00',
        image: 'https://picsum.photos/seed/prod1/80/80'
    },
    {
        name: 'EcoFlow Delta Pro PowerStation',
        price: '1,379.00',
        image: 'https://picsum.photos/seed/prod2/80/80'
    }
]

export function Aktionsprodukte() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Image
              src="https://picsum.photos/seed/ecoflow-home/600/700"
              alt="EcoFlow Delta Pro in a living room"
              width={600}
              height={700}
              className="rounded-none object-cover w-full h-auto"
              data-ai-hint="power station home"
            />
          </div>
          <div className="pt-0 md:pt-8">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">PROMOTIONAL PRODUCTS</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">EcoFlow Delta Pro</h2>
            <div className="mt-8 space-y-4">
                {products.map((product, index) => (
                    <div key={product.name}>
                        <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
                            <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-none" data-ai-hint="power station"/>
                            <div className="flex-1">
                                <h3 className="font-medium text-sm">{product.name}</h3>
                                <div className="mt-2">
                                     <Select defaultValue="0">
                                        <SelectTrigger className="w-auto text-xs h-7 bg-white border-gray-200 rounded-sm focus:ring-0">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0">0% VAT (Offer according to § 12 Abs. 3 UstG)</SelectItem>
                                        </SelectContent>
                                     </Select>
                                </div>
                            </div>
                             <div className="text-right">
                                {product.originalPrice && <p className="text-sm text-muted-foreground line-through">${product.originalPrice}</p>}
                                <p className="font-bold text-red-500 text-lg">${product.price}</p>
                            </div>
                        </div>
                        {index < products.length - 1 && <Separator className="mt-4" />}
                    </div>
                ))}
            </div>
            <Button size="lg" className="w-full mt-8 bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">
                ADD SET TO CART
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

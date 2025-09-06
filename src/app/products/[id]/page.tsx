
"use client";

import { useState, useContext } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, Product } from '@/lib/products';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, MessageCircle, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CartContext } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalfStar && <Star key="half" className="h-5 w-5 text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        {reviews > 0 ? `${rating.toFixed(1)} (${reviews} reviews)` : 'No reviews'}
      </span>
    </div>
  );
};


export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { toast } = useToast();

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Product Added",
      description: `${quantity}x ${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
          <div className="grid gap-4 items-start">
             <div className="relative aspect-[1/1] w-full overflow-hidden rounded-lg border">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    data-ai-hint={product.hint}
                />
            </div>
          </div>
          
          <div className="grid gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{product.brand}</p>
              <h1 className="text-3xl lg:text-4xl font-bold mt-1">{product.name}</h1>
            </div>
            
            <div className="flex items-center gap-4">
                <StarRating rating={product.rating} reviews={product.reviews} />
                <Separator orientation="vertical" className="h-5" />
                <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <MessageCircle className="h-5 w-5" />
                    {product.questions} Questions
                </a>
            </div>

            <p className="text-lg">{product.description}</p>
            
            <div className="text-4xl font-bold">
                ${product.price.replace(',', '.')}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-4 w-4" />
                </Button>
                <Input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 h-10 text-center border-0 focus-visible:ring-0"
                />
                <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5"/>
                Add to Cart
              </Button>
            </div>
            
            <Separator />
            
            <Accordion type="single" collapsible className="w-full" defaultValue="features">
              {product.features && (
                <AccordionItem value="features">
                    <AccordionTrigger className="text-lg font-medium">Features</AccordionTrigger>
                    <AccordionContent>
                    <ul className="list-disc space-y-2 pl-6">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    </AccordionContent>
                </AccordionItem>
              )}
              {product.specs && (
                <AccordionItem value="specs">
                    <AccordionTrigger className="text-lg font-medium">Specifications</AccordionTrigger>
                    <AccordionContent>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {Object.entries(product.specs).map(([key, value]) => (
                            <React.Fragment key={key}>
                                <div className="font-semibold">{key}</div>
                                <div>{value}</div>
                            </React.Fragment>
                        ))}
                    </div>
                    </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

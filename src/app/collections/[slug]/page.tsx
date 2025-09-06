
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import { Product, products } from '@/lib/products';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        ))}
        {hasHalfStar && <Star key="half" className="h-4 w-4 text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300 fill-gray-300" />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">
        {reviews > 0 ? `${rating.toFixed(1)} | (${reviews})` : 'No reviews'}
      </span>
    </div>
  );
};

function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Product added",
      description: `${product.name} has been added to your cart.`,
    });
  }

  return (
    <div className="group relative block overflow-hidden animate-fade-in">
       <Link href={product.href}>
        <div className="relative aspect-[1/1] w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.hint}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
      <div className="p-4 bg-card text-left">
        <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{product.brand}</p>
            <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-black border-2 border-white ring-1 ring-gray-400"></span>
                <span className="h-3 w-3 rounded-full bg-gray-200 border-2 border-white ring-1 ring-gray-400"></span>
            </div>
        </div>
        <h3 className="mt-2 text-sm font-medium text-foreground h-10">
          <Link href={product.href}>
            {product.name}
          </Link>
        </h3>
        
        <div className="mt-2">
            <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            <span>{product.questions > 0 ? `${product.questions} Question${product.questions > 1 ? 's' : ''}` : 'No questions'}</span>
        </div>

        <p className="mt-3 font-semibold text-foreground text-base">${product.price.replace(' - ', ' - $')}</p>
      </div>
    </div>
  )
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
    const collectionName = params.slug.replace(/-/g, ' ').replace(/percent/g, '%');
    const collectionProducts = products.filter(p => p.collection && p.collection.toLowerCase() === collectionName.toLowerCase());

    const title = collectionName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');


    if (collectionProducts.length === 0) {
        // Or show a "No products found" message
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">
                <section className="py-24 bg-background pt-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 animate-fade-in">
                            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                                Browse products in the {title} collection.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {collectionProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}


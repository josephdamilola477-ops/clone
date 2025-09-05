"use client";

import { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(',', '.').split(' - ')[0]);
    return acc + price * (item.quantity || 1);
  }, 0);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold mb-8">Ihr Warenkorb</h1>
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">Ihr Warenkorb ist leer.</p>
            <Button asChild>
              <Link href="/">Weiter einkaufen</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                    <div className="flex-grow">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">€{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 text-center"
                      />
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Zusammenfassung</h2>
              <div className="space-y-2 p-4 border rounded-lg bg-card">
                <div className="flex justify-between">
                  <span>Zwischensumme</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Versand</span>
                  <span>Kostenlos</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Gesamtsumme</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
              </div>
              <Button size="lg" className="w-full">Zur Kasse gehen</Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>Warenkorb leeren</Button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

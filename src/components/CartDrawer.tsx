"use client";

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Trash2, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};

const parsePrice = (priceString: string): number => {
    const cleanedString = priceString.replace('$', '').replace(/,/g, '').trim();
    const price = parseFloat(cleanedString.split(' - ')[0]);
    return isNaN(price) ? 0 : price;
}

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce((acc, item) => {
    const price = parsePrice(item.price);
    return acc + price * (item.quantity || 1);
  }, 0);

  return (
    <div className="flex h-full flex-col">
      <SheetHeader className="p-6">
        <SheetTitle className="flex justify-between items-center">
            Your Cart ({cart.length})
        </SheetTitle>
      </SheetHeader>
      <Separator />
      {cart.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
          <SheetClose asChild>
            <Button asChild>
                <Link href="/">Continue Shopping</Link>
            </Button>
          </SheetClose>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="grid grid-cols-[80px_1fr_auto] items-start gap-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                  <div className="flex-grow">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">${item.price}</p>
                     <div className="flex items-center gap-2 mt-2">
                        <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-16 h-8 text-center"
                        />
                    </div>
                  </div>
                   <div className="text-right">
                        <p className="font-semibold">{formatPrice(parsePrice(item.price) * (item.quantity || 1))}</p>
                        <Button variant="ghost" size="icon" className="h-8 w-8 mt-1" onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="p-6 border-t">
             <div className="w-full space-y-4">
                <div className="flex justify-between font-bold text-lg">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                </div>
                <Button size="lg" className="w-full">Proceed to Checkout</Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>Clear Cart</Button>
            </div>
          </SheetFooter>
        </>
      )}
    </div>
  );
}

"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              PowerHub
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#products" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Products</Link>
              <Link href="#solutions" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Solutions</Link>
              <Link href="#support" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Support</Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon"><Search size={20}/></Button>
            <Button variant="ghost" size="icon"><User size={20}/></Button>
            <Button variant="ghost" size="icon"><ShoppingCart size={20}/></Button>
          </div>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Link href="/" className="text-2xl font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
                        PowerHub
                      </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X size={24} />
                       <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex-1 flex flex-col gap-4 p-4">
                    <Link href="#products" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                    <Link href="#solutions" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
                    <Link href="#support" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Support</Link>
                  </nav>
                  <div className="p-4 border-t flex justify-around">
                     <Button variant="ghost" size="icon"><Search size={24}/></Button>
                     <Button variant="ghost" size="icon"><User size={24}/></Button>
                     <Button variant="ghost" size="icon"><ShoppingCart size={24}/></Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

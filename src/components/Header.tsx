"use client";
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ShoppingCart, User, Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CartContext } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { CartDrawer } from './CartDrawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { products } from '@/lib/products';

const collections = [...new Set(products.map(p => p.collection).filter(Boolean))];

function Logo() {
    return (
        <svg
            className="h-12 w-12 text-foreground"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="50" cy="50" r="48" stroke="red" strokeWidth="4" />
            <path
                d="M50 50L85.3 37.5L78.8 68.3L50 50Z"
                fill="#4A4A4A"
            />
            <path
                d="M50 50L78.8 68.3L59.3 84.4L50 50Z"
                fill="#4A4A4A"
            />
            <path
                d="M50 50L59.3 84.4L31.7 84.4L50 50Z"
                fill="#4A4A4A"
            />
            <path
                d="M50 50L31.7 84.4L21.2 68.3L50 50Z"
                fill="#4A4A4A"
            />
            <path
                d="M50 50L21.2 68.3L14.7 37.5L50 50Z"
                fill="#4A4A4A"
            />
            <path
                d="M50 50L14.7 37.5L31.7 15.6L50 50Z"
                fill="#4A4A4A"
            />
            <path
                d="M50 50L31.7 15.6L59.3 15.6L50 50Z"
                fill="#4A4A4A"
            />
            <path
                d="M50 50L59.3 15.6L85.3 37.5L50 50Z"
                fill="#4A4A4A"
            />
            <text
                x="42"
                y="60"
                fontFamily="Arial"
                fontSize="24"
                fill="red"
                fontWeight="bold"
                textAnchor="end"
            >
                M
            </text>
            <line x1="44" y1="40" x2="44" y2="60" stroke="white" strokeWidth="2" />
            <text
                x="46"
                y="60"
                fontFamily="Arial"
                fontSize="24"
                fill="white"
                fontWeight="bold"
                textAnchor="start"
            >
                I
            </text>
        </svg>
    )
}

function TopBar() {
    return (
        <div className="bg-gray-900 text-white text-xs py-2 hidden md:block">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <span>Products available for immediate delivery</span>
                    <span>On-site pickup available by appointment</span>
                    <span>Free shipping in Germany</span>
                </div>
            </div>
        </div>
    )
}


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

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
      scrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
       <Sheet>
        <TopBar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 md:h-24 items-center">
            <div className="flex items-center flex-1 md:flex-none">
                <Link href="/" className="flex items-center gap-2">
                <Logo />
                </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                <nav className="flex items-center space-x-6">
                    <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">PRODUCTS</Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                        COLLECTIONS <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {collections.map(collection => (
                          <DropdownMenuItem key={collection} asChild>
                            <Link href={`/collections/${collection.toLowerCase().replace(/ /g, '-').replace(/%/g, 'percent')}`}>{collection}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">REQUEST A QUOTE</Link>
                    <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">CONTACT</Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">%OUTLET%</Link>
                </nav>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon"><Search size={20}/></Button>
                    <Button variant="ghost" size="icon"><User size={20}/></Button>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart size={20}/>
                        {cartItemCount > 0 && (
                          <Badge variant="destructive" className="absolute -right-2 -top-2 h-5 w-5 justify-center p-0">{cartItemCount}</Badge>
                        )}
                      </Button>
                    </SheetTrigger>
                </div>
            </div>
            
            <div className="flex justify-end md:hidden">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                    <Menu size={24} />
                    <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background p-0 w-full max-w-sm">
                    <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                            <Logo />
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                        <X size={24} />
                        <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                    <nav className="flex-1 flex flex-col gap-4 p-4">
                        <Link href="/products" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>PRODUCTS</Link>
                         <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-center gap-1 text-lg font-medium text-muted-foreground hover:text-primary transition-colors outline-none">
                            COLLECTIONS <ChevronDown className="h-4 w-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {collections.map(collection => (
                              <DropdownMenuItem key={collection} asChild>
                                <Link href={`/collections/${collection.toLowerCase().replace(/ /g, '-').replace(/%/g, 'percent')}`}>{collection}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/contact" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>REQUEST A QUOTE</Link>
                        <Link href="/contact" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
                        <Link href="#" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>%OUTLET%</Link>
                    </nav>
                    <div className="p-4 border-t flex justify-around">
                        <Button variant="ghost" size="icon"><Search size={24}/></Button>
                        <Button variant="ghost" size="icon"><User size={24}/></Button>
                         <SheetTrigger asChild>
                          <Button variant="ghost" size="icon" className="relative" onClick={() => setMobileMenuOpen(false)}>
                              <ShoppingCart size={24}/>
                              {cartItemCount > 0 && (
                              <Badge variant="destructive" className="absolute -right-2 -top-2 h-5 w-5 justify-center p-0">{cartItemCount}</Badge>
                              )}
                          </Button>
                        </SheetTrigger>
                    </div>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
            </div>
        </div>
        <SheetContent className="p-0 w-full max-w-md">
            <CartDrawer />
        </SheetContent>
      </Sheet>
    </header>
  );
}

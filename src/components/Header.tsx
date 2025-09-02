"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            max
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#projects" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Projects</Link>
            <Link href="#about" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

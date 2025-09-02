import Link from 'next/link';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
             <Link href="/" className="text-2xl font-bold text-primary-foreground bg-primary px-3 py-1 rounded-md hover:opacity-90 transition-opacity">
              PowerHub
            </Link>
            <p className="text-muted-foreground text-sm mt-4">Powering your life, anywhere.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Portable Power</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Solar Panels</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Accessories</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Home Backup</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">About</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Our Story</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Shipping & Returns</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <ul className="space-y-2">
                 <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
                 </li>
                 <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Instagram</a>
                 </li>
                 <li>
                    <Button variant="link" asChild className="p-0 h-auto text-sm text-muted-foreground">
                        <Link href="/suggest-styles">AI Style Suggester</Link>
                    </Button>
                </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} PowerHub. All Rights Reserved.</p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent">
                    <Globe size={16} /> English
                </Button>
            </div>
        </div>
      </div>
    </footer>
  );
}

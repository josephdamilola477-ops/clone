import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Max Clone. All Rights Reserved.</p>
            <div className="flex items-center gap-2">
                <Button variant="link" asChild>
                    <Link href="/suggest-styles">AI Style Suggester</Link>
                </Button>
                 <Button variant="ghost" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                 </Button>
                 <Button variant="ghost" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                 </Button>
            </div>
        </div>
      </div>
    </footer>
  );
}

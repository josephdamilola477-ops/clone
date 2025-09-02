import Link from 'next/link';
import { Button } from './ui/button';
import { Globe, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const paymentMethods = [
  { name: 'American Express', logo: 'https://picsum.photos/seed/amex/64/40' },
  { name: 'Apple Pay', logo: 'https://picsum.photos/seed/applepay/64/40' },
  { name: 'eps', logo: 'https://picsum.photos/seed/eps/64/40' },
  { name: 'Google Pay', logo: 'https://picsum.photos/seed/gpay/64/40' },
  { name: 'Klarna', logo: 'https://picsum.photos/seed/klarna/64/40' },
  { name: 'Mastercard', logo: 'https://picsum.photos/seed/mastercard/64/40' },
  { name: 'PayPal', logo: 'https://picsum.photos/seed/paypal/64/40' },
  { name: 'Shop Pay', logo: 'https://picsum.photos/seed/shoppay/64/40' },
  { name: 'UnionPay', logo: 'https://picsum.photos/seed/unionpay/64/40' },
  { name: 'Visa', logo: 'https://picsum.photos/seed/visa/64/40' },
];


export function Footer() {
  return (
    <footer className="bg-background text-foreground/80 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-foreground text-sm tracking-widest">SHOP</h3>
            <ul className="space-y-3">
              <li><Link href="/terms-and-conditions" className="text-sm hover:text-primary">Terms and Conditions</Link></li>
              <li><Link href="/imprint" className="text-sm hover:text-primary">imprint</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/withdrawal" className="text-sm hover:text-primary">Right of withdrawal & withdrawal form</Link></li>
              <li><Link href="/payment-information" className="text-sm hover:text-primary">Payment information</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4 text-foreground text-sm tracking-widest">SERVICES</h3>
            <ul className="space-y-3">
              <li><Link href="/returns-portal" className="text-sm hover:text-primary">Returns portal</Link></li>
              <li><Link href="/info-zero-tax" className="text-sm hover:text-primary">Info zero tax rate PV systems</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-4 text-xs text-muted-foreground order-2 md:order-1 mt-8 md:mt-0">
                <p>&copy; {new Date().getFullYear()} MarcMax Shop.</p>
                <div className="flex flex-wrap justify-center gap-x-4">
                    <Link href="/withdrawal" className="hover:text-primary">Right of withdrawal</Link>
                    <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="/terms-and-conditions" className="hover:text-primary">Terms and Conditions</Link>
                    <Link href="#" className="hover:text-primary">Shipment</Link>
                    <Link href="/contact" className="hover:text-primary">Contact information</Link>
                    <Link href="/imprint" className="hover:text-primary">imprint</Link>
                </div>
            </div>
            <div className="flex items-center gap-x-4 order-1 md:order-2">
                <Button variant="ghost" size="sm" className="gap-2 text-xs">
                    <Globe size={16} /> German <ChevronDown size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-xs">
                    Germany (EUR €) <ChevronDown size={16} />
                </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-2">
            {paymentMethods.map((pm) => (
                <div key={pm.name} className="bg-white border rounded-md p-2 flex items-center justify-center h-10">
                    <Image
                        src={pm.logo}
                        alt={pm.name}
                        width={40}
                        height={24}
                        className="object-contain"
                        data-ai-hint="payment method"
                    />
                </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

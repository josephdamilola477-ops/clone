import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Roboto } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { ChatBubble } from '@/components/ChatBubble';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'PowerHub',
  description: 'Your one-stop shop for portable power.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          
          <ChatBubble />
        </CartProvider>
      </body>
    </html>
  );
}

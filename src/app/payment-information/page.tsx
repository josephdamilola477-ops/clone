import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

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

export default function PaymentInformation() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">Payment Information</h1>
          <div className="prose dark:prose-invert mt-8">
            <p>We offer a variety of secure and convenient payment methods to make your shopping experience as smooth as possible.</p>
            
            <h2 className="mt-8 text-2xl font-bold">Accepted Payment Methods</h2>
            <p>You can choose from the following payment options at checkout:</p>
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {paymentMethods.map((pm) => (
                <div key={pm.name} className="flex flex-col items-center justify-center p-4 border rounded-lg bg-card">
                  <div className="relative h-10 w-16 flex items-center justify-center">
                    <Image
                      src={pm.logo}
                      alt={pm.name}
                      width={64}
                      height={40}
                      className="object-contain"
                      data-ai-hint="payment method"
                    />
                  </div>
                  <p className="mt-2 text-sm text-center text-muted-foreground">{pm.name}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold">Payment Security</h2>
            <p>Your security is our top priority. All transactions are encrypted using SSL technology. We do not store your credit card information on our servers. All payments are processed through a certified payment provider to ensure the highest level of security.</p>

            <h2 className="mt-8 text-2xl font-bold">Invoice and Billing</h2>
            <p>You will receive an invoice for your order via email as soon as your order is shipped. If you have any questions about your invoice, please contact our customer service.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
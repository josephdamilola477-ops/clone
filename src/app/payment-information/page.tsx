import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PaymentInformation() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold">Payment Information</h1>
        <p className="mt-4">Our payment information will be here.</p>
      </main>
      <Footer />
    </div>
  );
}

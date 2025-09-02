import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function InfoZeroTax() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold">Info zero tax rate PV systems</h1>
        <p className="mt-4">Our info on zero tax rate for PV systems will be here.</p>
      </main>
      <Footer />
    </div>
  );
}

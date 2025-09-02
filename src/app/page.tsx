import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductHighlight } from "@/components/ProductHighlight";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductHighlight />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

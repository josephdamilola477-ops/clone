import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Aktionsprodukte } from "@/components/Aktionsprodukte";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Categories } from "@/components/Categories";
import { Balkonkraftwerk } from "@/components/Balkonkraftwerk";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Aktionsprodukte />
        <Balkonkraftwerk />
        <Features />
        <Categories />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Aktionsprodukte } from "@/components/Aktionsprodukte";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { Balkonkraftwerk } from "@/components/Balkonkraftwerk";
import { Nanoleaf } from "@/components/Nanoleaf";
import { AboutUs } from "@/components/AboutUs";
import { PremiumBrands } from "@/components/PremiumBrands";
import { Location } from "@/components/Location";
import { Collections } from "@/components/Collections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Aktionsprodukte />
        <Balkonkraftwerk />
        <Partners />
        <AboutUs />
        <Features />
        <Products />
        <Collections />
        <Nanoleaf />
        <PremiumBrands />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Kontaktieren Sie uns</h1>
          <p className="mt-4 text-center text-muted-foreground">
            Wir sind hier um zu helfen. Kontaktieren Sie uns bei Fragen oder Bedenken.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold">In Kontakt kommen</h2>
              <form className="mt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Ihr Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ihre@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea id="message" placeholder="Ihre Nachricht..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">Nachricht senden</Button>
              </form>
            </div>
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Kontaktinformationen</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Unsere Adresse</h3>
                    <p className="text-muted-foreground">
                      MarcMax-Media<br/>
                      Theisinger Lagerlogistik<br/>
                      Stuttgarter Str. 69, 74321<br/>
                      Bietigheim-Bissingen, Deutschland
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Mailen Sie uns</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors">
                      <a href="mailto:info@marcmax-media.de">info@marcmax-media.de</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Rufen Sie uns an</h3>
                    <p className="text-muted-foreground hover:text-primary transition-colors">
                      <a href="tel:+4971429187330">+49 (0) 7142 9187330</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

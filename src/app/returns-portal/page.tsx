import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ReturnsPortal() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Retourenportal</h1>
          <div className="prose dark:prose-invert mt-4 mx-auto text-center">
            <p>
              Um Ihre Rücksendung zu starten, geben Sie bitte Ihre Bestellnummer und die E-Mail-Adresse ein, die Sie für den Kauf verwendet haben.
            </p>
          </div>
          
          <div className="mt-12 p-8 border rounded-lg bg-card">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="order-number">Bestellnummer</Label>
                <Input id="order-number" placeholder="z.B., #12345" />
                <p className="text-xs text-muted-foreground">Diese finden Sie in Ihrer Bestellbestätigungs-E-Mail.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail-Adresse</Label>
                <Input id="email" type="email" placeholder="ihre@email.com" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">Rücksendung starten</Button>
            </form>
          </div>

          <div className="prose dark:prose-invert mt-12 mx-auto">
            <h2 className="text-2xl font-bold">Unsere Rückgabebedingungen</h2>
            <p>
              Wir möchten, dass Sie mit Ihrem Kauf rundum zufrieden sind. Wenn nicht, sind wir hier, um zu helfen.
            </p>
            <ul>
              <li>Sie können Artikel innerhalb von 30 Tagen nach dem Lieferdatum zurückgeben.</li>
              <li>Die Artikel müssen sich im Originalzustand befinden: unbenutzt, in der Originalverpackung und mit allen Etiketten versehen.</li>
              <li>Sobald Ihre Rücksendung genehmigt ist, erhalten Sie ein Rücksendeetikett.</li>
              <li>Rückerstattungen werden innerhalb von 5-7 Werktagen nach Erhalt und Prüfung des zurückgesandten Artikels auf die ursprüngliche Zahlungsmethode bearbeitet.</li>
            </ul>
            <p>Weitere Einzelheiten finden Sie in unseren vollständigen <a href="/terms-and-conditions">Allgemeinen Geschäftsbedingungen</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

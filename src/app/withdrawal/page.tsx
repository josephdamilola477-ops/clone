"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Withdrawal() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Widerrufsrecht & Widerrufsformular</h1>
          
          <h2 className="mt-8 text-2xl font-bold">Widerrufsrecht</h2>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
          </p>
          <p>
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
          </p>
          <p>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (MarcMax-Media GmbH, Stuttgarter Str. 69, 74321 Bietigheim-Bissingen, E-Mail: info@marcmax-media.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
          </p>
          <p>
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Folgen des Widerrufs</h2>
          <p>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Muster-Widerrufsformular</h2>
          <div className="mt-4 p-6 border rounded-lg bg-card not-prose">
            <p>Füllen Sie dieses Formular nur dann aus und senden Sie es zurück, wenn Sie den Vertrag widerrufen wollen.</p>
            <hr className="my-4"/>
            <p>An:</p>
            <p>
              MarcMax-Media GmbH<br/>
              Stuttgarter Str. 69<br/>
              74321 Bietigheim-Bissingen<br/>
              Deutschland<br/>
              E-Mail: info@marcmax-media.de
            </p>
            <p className="mt-4">
              Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*),
            </p>
            <p className="mt-4">Bestellt am (*)/erhalten am (*),</p>
            <p className="mt-4">Name des/der Verbraucher(s),</p>
            <p className="mt-4">Anschrift des/der Verbraucher(s),</p>
            <p className="mt-4">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier),</p>
            <p className="mt-4">Datum</p>
            <p className="mt-6 text-sm">(*) Unzutreffendes streichen.</p>
          </div>
          <Button size="lg" className="mt-6 not-prose bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base" onClick={() => window.print()}>
            Formular drucken
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function InfoZeroTax() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Informationen zum Nullsteuersatz für Photovoltaikanlagen (§ 12 Abs. 3 UstG)</h1>
          
          <p className="lead">
            Seit dem 1. Januar 2023 gilt für die Lieferung und Installation von Photovoltaikanlagen und deren wesentlichen Komponenten, einschließlich Stromspeichern, ein Nullsteuersatz. Dies ist im Umsatzsteuergesetz (§ 12 Abs. 3 UstG) geregelt. Wir freuen uns, diesen Steuervorteil an Sie weiterzugeben.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Wer ist für den Nullsteuersatz berechtigt?</h2>
          <p>
            Der Nullsteuersatz gilt für Sie, wenn Sie folgende Bedingungen erfüllen:
          </p>
          <ul>
            <li>Sie sind der Betreiber der Photovoltaikanlage.</li>
            <li>Die Anlage wird auf oder in der Nähe eines Privathauses, einer Wohnung oder eines öffentlichen oder anderen Gebäudes installiert, das für dem Gemeinwohl dienende Tätigkeiten genutzt wird.</li>
            <li>Die installierte Bruttoleistung der Anlage überschreitet 30 kW (peak) nicht.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">Wie funktioniert das in unserem Shop?</h2>
          <p>
            Bei berechtigten Produkten sehen Sie auf der Produktseite eine Auswahlmöglichkeit, um zu bestätigen, dass Sie die Voraussetzungen für den Nullsteuersatz erfüllen. Mit der Auswahl dieser Option wird der Preis ohne Mehrwertsteuer (0% MwSt.) angezeigt und berechnet.
          </p>
          <p>
            Mit dieser Auswahl und dem Abschluss des Kaufs bestätigen Sie uns rechtsverbindlich, dass Sie die Voraussetzungen erfüllen. Es sind keine weiteren Formulare notwendig.
          </p>
          
          <h2 className="mt-8 text-2xl font-bold">Welche Produkte sind betroffen?</h2>
          <p>
            Der Nullsteuersatz gilt für Photovoltaikanlagen sowie für deren betriebswesentliche Komponenten. Dazu gehören zum Beispiel:
          </p>
           <ul>
            <li>Solarmodule</li>
            <li>Wechselrichter</li>
            <li>Dachmontagesysteme</li>
            <li>Stromspeicher (Batterien)</li>
            <li>Verkabelungs- und Anschlusskomponenten</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">Haftungsausschluss</h2>
          <p>
            Diese Informationen wurden nach bestem Wissen und Gewissen zusammengestellt. Sie stellen jedoch keine Steuerberatung dar und ersetzen nicht die professionelle Beratung durch einen Steuerberater. Alle Angaben sind ohne Gewähr.
          </p>
          <p>
            Bei Fragen zögern Sie bitte nicht, uns zu <Link href="/contact">kontaktieren</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

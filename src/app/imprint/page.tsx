import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Imprint() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Impressum</h1>
          
          <h2 className="mt-8 text-2xl font-bold">Angaben gemäß § 5 TMG</h2>
          <p>
            MarcMax-Media GmbH<br/>
            Stuttgarter Str. 69<br/>
            74321 Bietigheim-Bissingen
          </p>

          <h2 className="mt-8 text-2xl font-bold">Vertreten durch:</h2>
          <p>Max Mustermann (Geschäftsführer)</p>

          <h2 className="mt-8 text-2xl font-bold">Kontakt:</h2>
          <p>
            Telefon: +49 (0) 7142 9187330<br/>
            E-Mail: info@marcmax-media.de
          </p>

          <h2 className="mt-8 text-2xl font-bold">Registereintrag:</h2>
          <p>
            Eintragung im Handelsregister.<br/>
            Registergericht: Amtsgericht Stuttgart<br/>
            Registernummer: HRB 12345
          </p>

          <h2 className="mt-8 text-2xl font-bold">Umsatzsteuer:</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
            DE123456789
          </p>

          <h2 className="mt-8 text-2xl font-bold">Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>.<br/>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

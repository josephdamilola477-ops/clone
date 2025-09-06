import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Imprint() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Imprint</h1>
          
          <h2 className="mt-8 text-2xl font-bold">Information according to § 5 TMG</h2>
          <p>
            MarcMax-Media GmbH<br/>
            Stuttgarter Str. 69<br/>
            74321 Bietigheim-Bissingen
          </p>

          <h2 className="mt-8 text-2xl font-bold">Represented by:</h2>
          <p>Max Mustermann (CEO)</p>

          <h2 className="mt-8 text-2xl font-bold">Contact:</h2>
          <p>
            Phone: +49 (0) 7142 9187330<br/>
            Email: info@marcmax-media.de
          </p>

          <h2 className="mt-8 text-2xl font-bold">Register entry:</h2>
          <p>
            Entry in the Commercial Register.<br/>
            Registering court: Amtsgericht Stuttgart<br/>
            Registration number: HRB 12345
          </p>

          <h2 className="mt-8 text-2xl font-bold">VAT ID:</h2>
          <p>
            Sales tax identification number according to §27 a of the Sales Tax Law:<br/>
            DE123456789
          </p>

          <h2 className="mt-8 text-2xl font-bold">Dispute resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>.<br/>
            You can find our email address in the imprint above.
          </p>
          <p>
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

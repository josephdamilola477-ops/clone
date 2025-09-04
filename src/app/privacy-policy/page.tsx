import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>
          <p className="text-muted-foreground">Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="mt-8 text-2xl font-bold">1. Einleitung</h2>
          <p>
            Willkommen im MarcMax Shop. Wir verpflichten uns, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen sammeln, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen. Bitte lesen Sie diese Datenschutzerklärung sorgfältig durch. Wenn Sie mit den Bedingungen dieser Datenschutzerklärung nicht einverstanden sind, greifen Sie bitte nicht auf die Website zu.
          </p>

          <h2 className="mt-8 text-2xl font-bold">2. Erhebung Ihrer Daten</h2>
          <p>
            Wir können Informationen über Sie auf verschiedene Weise sammeln. Die Informationen, die wir auf der Website sammeln können, umfassen:
          </p>
          <h3>Personenbezogene Daten</h3>
          <p>
            Persönlich identifizierbare Informationen wie Ihr Name, Ihre Lieferadresse, Ihre E-Mail-Adresse und Ihre Telefonnummer sowie demografische Informationen wie Ihr Alter, Ihr Geschlecht, Ihr Heimatort und Ihre Interessen, die Sie uns freiwillig zur Verfügung stellen, wenn Sie sich auf der Website registrieren oder wenn Sie sich entscheiden, an verschiedenen Aktivitäten im Zusammenhang mit der Website teilzunehmen, wie z. B. Online-Chat und Message Boards.
          </p>
          <h3>Abgeleitete Daten</h3>
          <p>
            Informationen, die unsere Server automatisch erfassen, wenn Sie auf die Website zugreifen, wie z. B. Ihre IP-Adresse, Ihr Browsertyp, Ihr Betriebssystem, Ihre Zugriffszeiten und die Seiten, die Sie direkt vor und nach dem Zugriff auf die Website angesehen haben.
          </p>

          <h2 className="mt-8 text-2xl font-bold">3. Verwendung Ihrer Daten</h2>
          <p>
            Genaue Informationen über Sie ermöglichen es uns, Ihnen ein reibungsloses, effizientes und individuelles Erlebnis zu bieten. Insbesondere können wir die über die Website über Sie gesammelten Informationen verwenden, um:
          </p>
          <ul>
            <li>Ihr Konto zu erstellen und zu verwalten.</li>
            <li>Ihnen eine E-Mail bezüglich Ihres Kontos oder Ihrer Bestellung zu senden.</li>
            <li>Käufe, Bestellungen, Zahlungen und andere Transaktionen im Zusammenhang mit der Website zu erfüllen und zu verwalten.</li>
            <li>Die Effizienz und den Betrieb der Website zu erhöhen.</li>
            <li>Nutzung und Trends zu überwachen und zu analysieren, um Ihr Erlebnis mit der Website zu verbessern.</li>
            <li>Sie über Aktualisierungen der Website zu informieren.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">4. Sicherheit Ihrer Daten</h2>
          <p>
            Wir verwenden administrative, technische und physische Sicherheitsmaßnahmen, um Ihre persönlichen Daten zu schützen. Obwohl wir angemessene Schritte unternommen haben, um die uns von Ihnen zur Verfügung gestellten personenbezogenen Daten zu sichern, beachten Sie bitte, dass trotz unserer Bemühungen keine Sicherheitsmaßnahmen perfekt oder undurchdringlich sind und keine Methode der Datenübertragung gegen Abfangen oder andere Arten von Missbrauch garantiert werden kann.
          </p>

          <h2 className="mt-8 text-2xl font-bold">5. Kontaktieren Sie uns</h2>
          <p>
            Wenn Sie Fragen oder Kommentare zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter:
          </p>
          <p>
            MarcMax-Media GmbH<br/>
            Stuttgarter Str. 69<br/>
            74321 Bietigheim-Bissingen<br/>
            E-Mail: info@marcmax-media.de
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

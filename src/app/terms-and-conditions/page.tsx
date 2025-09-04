import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-muted-foreground">Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="mt-8 text-2xl font-bold">1. Zustimmung zu den Bedingungen</h2>
          <p>
            Durch den Zugriff auf diese Website gehen wir davon aus, dass Sie diese Allgemeinen Geschäftsbedingungen akzeptieren. Nutzen Sie den MarcMax Shop nicht weiter, wenn Sie nicht allen auf dieser Seite genannten Bedingungen zustimmen.
          </p>

          <h2 className="mt-8 text-2xl font-bold">2. Cookies</h2>
          <p>
            Wir verwenden Cookies. Durch den Zugriff auf den MarcMax Shop haben Sie der Verwendung von Cookies in Übereinstimmung mit der Datenschutzerklärung der MarcMax-Media GmbH zugestimmt. Die meisten interaktiven Websites verwenden Cookies, um die Benutzerdaten für jeden Besuch abzurufen.
          </p>

          <h2 className="mt-8 text-2xl font-bold">3. Lizenz</h2>
          <p>
            Sofern nicht anders angegeben, besitzen die MarcMax-Media GmbH und/oder ihre Lizenzgeber die geistigen Eigentumsrechte für alle Materialien im MarcMax Shop. Alle geistigen Eigentumsrechte sind vorbehalten. Sie können für Ihren eigenen persönlichen Gebrauch darauf zugreifen, vorbehaltlich der in diesen Bedingungen festgelegten Einschränkungen.
          </p>
          <p>Sie dürfen nicht:</p>
          <ul>
              <li>Material aus dem MarcMax Shop wiederveröffentlichen</li>
              <li>Material aus dem MarcMax Shop verkaufen, vermieten oder unterlizenzieren</li>
              <li>Material aus dem MarcMax Shop reproduzieren, duplizieren oder kopieren</li>
              <li>Inhalte aus dem MarcMax Shop weiterverbreiten</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">4. Versand und Lieferung</h2>
          <p>
            Wir bieten den Versand an Adressen innerhalb Deutschlands an. Alle Bestellungen werden innerhalb von 1-2 Werktagen bearbeitet. Die Versandzeiten sind Schätzungen und beginnen ab dem Versanddatum, nicht ab dem Bestelldatum. Wir sind nicht verantwortlich für Verzögerungen, die durch den Spediteur verursacht werden.
          </p>

          <h2 className="mt-8 text-2xl font-bold">5. Rückgabe und Rückerstattung</h2>
          <p>
            Unsere Rückgabefrist beträgt 30 Tage. Wenn seit Ihrem Kauf 30 Tage vergangen sind, können wir Ihnen leider keine Rückerstattung oder keinen Umtausch anbieten. Um für eine Rücksendung in Frage zu kommen, muss Ihr Artikel unbenutzt und in demselben Zustand sein, in dem Sie ihn erhalten haben. Er muss sich auch in der Originalverpackung befinden.
          </p>

          <h2 className="mt-8 text-2xl font-bold">6. Geltendes Recht</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen Deutschlands und werden in Übereinstimmung mit diesen ausgelegt, und Sie unterwerfen sich unwiderruflich der ausschließlichen Zuständigkeit der Gerichte in diesem Staat oder an diesem Ort.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

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
          <h1 className="text-4xl font-bold">Right of Withdrawal & Withdrawal Form</h1>
          
          <h2 className="mt-8 text-2xl font-bold">Right of Withdrawal</h2>
          <p>
            You have the right to withdraw from this contract within fourteen days without giving any reason.
          </p>
          <p>
            The withdrawal period will expire after 14 days from the day on which you acquire, or a third party other than the carrier and indicated by you acquires, physical possession of the goods.
          </p>
          <p>
            To exercise the right of withdrawal, you must inform us (MarcMax-Media GmbH, Stuttgarter Str. 69, 74321 Bietigheim-Bissingen, Email: info@marcmax-media.de) of your decision to withdraw from this contract by an unequivocal statement (e.g. a letter sent by post, fax or e-mail). You may use the attached model withdrawal form, but it is not obligatory.
          </p>
          <p>
            To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Effects of Withdrawal</h2>
          <p>
            If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement. We may withhold reimbursement until we have received the goods back or you have supplied evidence of having sent back the goods, whichever is the earliest.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Model Withdrawal Form</h2>
          <div className="mt-4 p-6 border rounded-lg bg-card not-prose">
            <p>Complete and return this form only if you wish to withdraw from the contract.</p>
            <hr className="my-4"/>
            <p>To:</p>
            <p>
              MarcMax-Media GmbH<br/>
              Stuttgarter Str. 69<br/>
              74321 Bietigheim-Bissingen<br/>
              Germany<br/>
              Email: info@marcmax-media.de
            </p>
            <p className="mt-4">
              I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract of sale of the following goods (*)/for the provision of the following service (*),
            </p>
            <p className="mt-4">Ordered on (*)/received on (*),</p>
            <p className="mt-4">Name of consumer(s),</p>
            <p className="mt-4">Address of consumer(s),</p>
            <p className="mt-4">Signature of consumer(s) (only if this form is notified on paper),</p>
            <p className="mt-4">Date</p>
            <p className="mt-6 text-sm">(*) Delete as appropriate.</p>
          </div>
          <Button size="lg" className="mt-6 not-prose bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base" onClick={() => window.print()}>
            Print Form
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="mt-8 text-2xl font-bold">1. Agreement to Terms</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use MarcMax Shop if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="mt-8 text-2xl font-bold">2. Cookies</h2>
          <p>
            We employ the use of cookies. By accessing MarcMax Shop, you agreed to use cookies in agreement with the MarcMax-Media GmbH's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit.
          </p>

          <h2 className="mt-8 text-2xl font-bold">3. License</h2>
          <p>
            Unless otherwise stated, MarcMax-Media GmbH and/or its licensors own the intellectual property rights for all material on MarcMax Shop. All intellectual property rights are reserved. You may access this from MarcMax Shop for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
              <li>Republish material from MarcMax Shop</li>
              <li>Sell, rent or sub-license material from MarcMax Shop</li>
              <li>Reproduce, duplicate or copy material from MarcMax Shop</li>
              <li>Redistribute content from MarcMax Shop</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">4. Shipping and Delivery</h2>
          <p>
            We offer shipping to addresses within Germany. All orders are processed within 1-2 business days. Shipping times are estimates and commence from the date of shipping, rather than the date of order. We are not responsible for any delays caused by the carrier.
          </p>

          <h2 className="mt-8 text-2xl font-bold">5. Returns and Refunds</h2>
          <p>
            Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
          </p>

          <h2 className="mt-8 text-2xl font-bold">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Germany and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function InfoZeroTax() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold">Information on the Zero Tax Rate for Photovoltaic Systems (§ 12 Abs. 3 UstG)</h1>
          
          <p className="lead">
            As of January 1, 2023, a zero tax rate applies to the supply and installation of photovoltaic systems and their essential components, including electricity storage systems. This is regulated in the German Value Added Tax Act (§ 12 Abs. 3 UstG). We are pleased to pass this tax advantage on to you.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Who is eligible for the zero tax rate?</h2>
          <p>
            The zero tax rate applies to you if you meet the following conditions:
          </p>
          <ul>
            <li>You are the operator of the photovoltaic system.</li>
            <li>The system is installed on or near a private residence, apartment, or a public or other building used for activities serving the common good.</li>
            <li>The installed gross capacity of the system does not exceed 30 kW (peak).</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">How does it work in our shop?</h2>
          <p>
            For eligible products, you will see a selection option on the product page to confirm that you meet the requirements for the zero tax rate. By selecting this option, the price will be displayed and calculated without VAT (0% VAT).
          </p>
          <p>
            By making this selection and completing the purchase, you are legally confirming to us that you fulfill the requirements. No further forms are necessary.
          </p>
          
          <h2 className="mt-8 text-2xl font-bold">Which products are affected?</h2>
          <p>
            The zero tax rate applies to photovoltaic systems as well as to components that are essential for their operation. This includes, for example:
          </p>
           <ul>
            <li>Solar panels</li>
            <li>Inverters</li>
            <li>Roof mounting systems</li>
            <li>Electricity storage systems (batteries)</li>
            <li>Cabling and connection components</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">Disclaimer</h2>
          <p>
            This information has been compiled to the best of our knowledge and belief. However, it does not constitute tax advice and is not a substitute for professional advice from a tax consultant. All information is provided without guarantee.
          </p>
          <p>
            If you have any questions, please do not hesitate to <Link href="/contact">contact us</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
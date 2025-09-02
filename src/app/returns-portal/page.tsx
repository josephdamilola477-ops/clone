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
          <h1 className="text-4xl font-bold text-center">Returns Portal</h1>
          <div className="prose dark:prose-invert mt-4 mx-auto text-center">
            <p>
              To start your return, please enter your order number and the email address you used for the purchase.
            </p>
          </div>
          
          <div className="mt-12 p-8 border rounded-lg bg-card">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="order-number">Order Number</Label>
                <Input id="order-number" placeholder="e.g., #12345" />
                <p className="text-xs text-muted-foreground">You can find this in your order confirmation email.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-none h-14 text-base">Start Return</Button>
            </form>
          </div>

          <div className="prose dark:prose-invert mt-12 mx-auto">
            <h2 className="text-2xl font-bold">Our Return Policy</h2>
            <p>
              We want you to be completely satisfied with your purchase. If you're not, we're here to help.
            </p>
            <ul>
              <li>You can return items within 30 days of the delivery date.</li>
              <li>Items must be in their original condition: unused, in the original packaging, and with all tags attached.</li>
              <li>Once your return is approved, you will receive a return shipping label.</li>
              <li>Refunds will be processed to the original payment method within 5-7 business days after we receive and inspect the returned item.</li>
            </ul>
            <p>For more details, please see our full <a href="/terms-and-conditions">Terms and Conditions</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
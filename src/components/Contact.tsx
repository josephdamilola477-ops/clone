"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Let's get in touch</h2>
        <p className="text-foreground/80 mb-8">
          Have a project in mind or just want to say hello? Drop me a line.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <Input name="name" type="text" placeholder="Your Name" required className="bg-card" />
          <Input name="email" type="email" placeholder="Your Email" required className="bg-card" />
          <Textarea name="message" placeholder="Your Message" required rows={5} className="bg-card" />
          <Button type="submit" className="w-full" size="lg">
            Send Message
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

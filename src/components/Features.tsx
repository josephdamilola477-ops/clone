import { Award, Box, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: '5 Years Warranty',
    description: 'We stand by our products with a 5-year warranty.',
  },
  {
    icon: <Box className="h-8 w-8 text-primary" />,
    title: 'Free Shipping & Return',
    description: 'Enjoy free shipping and returns on all orders.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Payments',
    description: 'Your payments are secure with our encrypted checkout.',
  },
];

export function Features() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

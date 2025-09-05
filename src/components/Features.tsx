import { Award, Box, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: '5 Jahre Garantie',
    description: 'Wir stehen zu unseren Produkten mit einer 5-Jahres-Garantie.',
  },
  {
    icon: <Box className="h-8 w-8 text-primary" />,
    title: 'Kostenloser Versand & Rückgabe',
    description: 'Genießen Sie kostenlosen Versand und Rückgabe bei allen Bestellungen.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Sichere Zahlungen',
    description: 'Ihre Zahlungen sind mit unserer verschlüsselten Kasse sicher.',
  },
];

export function Features() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={feature.title} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
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

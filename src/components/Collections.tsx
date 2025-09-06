
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "lucide-react";

const collections = [
  { name: 'Powerbanks', count: 6 },
  { name: 'Soundsysteme', count: 29 },
  { name: 'everHome', count: 1 },
  { name: 'ECTIVE', count: 2 },
  { name: 'Shargeek (Sharge)', count: 1 },
  { name: 'Roborock', count: 17 },
  { name: '0 % Bestandsartikel', count: 31 },
];

export function Collections() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Our Collections</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated collections to find exactly what you need.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Card key={collection.name} className="animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  {collection.name}
                </CardTitle>
                <Tag className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{collection.count}</div>
                <p className="text-xs text-muted-foreground">
                  Products in this collection
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

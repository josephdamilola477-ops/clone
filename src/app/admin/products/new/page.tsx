
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewProductPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Neues Produkt hinzufügen</CardTitle>
        <CardDescription>
          Füllen Sie die Details aus, um ein neues Produkt zu Ihrem Shop hinzuzufügen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="z.B. EcoFlow DELTA 2" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="brand">Marke</Label>
            <Input id="brand" type="text" placeholder="z.B. EcoFlow" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Beschreibung</Label>
            <Textarea
              id="description"
              placeholder="Geben Sie eine detaillierte Produktbeschreibung ein..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-3">
              <Label htmlFor="price">Preis</Label>
              <Input id="price" type="text" placeholder="z.B. 999,00 oder 39.00 - 79.00" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="image">Bild-URL</Label>
              <Input id="image" type="text" placeholder="https://picsum.photos/seed/..." />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Abbrechen</Button>
            <Button>Produkt speichern</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

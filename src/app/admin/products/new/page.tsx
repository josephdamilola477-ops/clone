
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
        <CardTitle>Add New Product</CardTitle>
        <CardDescription>
          Fill in the details to add a new product to your shop.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="e.g. EcoFlow DELTA 2" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="brand">Brand</Label>
            <Input id="brand" type="text" placeholder="e.g. EcoFlow" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter a detailed product description..."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-3">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="text" placeholder="e.g. 999.00 or 39.00 - 79.00" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" type="text" placeholder="https://picsum.photos/seed/..." />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Product</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

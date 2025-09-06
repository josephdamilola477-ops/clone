
export interface Product {
    id: string;
    brand: string;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    questions: number;
    price: string;
    href: string;
    hint?: string;
    quantity?: number;
    description?: string;
    features?: string[];
    specs?: { [key: string]: string };
}

export const products: Product[] = [];

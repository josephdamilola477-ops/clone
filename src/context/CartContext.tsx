"use client";

import React, { createContext, useState, ReactNode } from 'react';

export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    brand: string;
    rating: number;
    reviews: number;
    questions: number;
    href: string;
    hint?: string;
    quantity?: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

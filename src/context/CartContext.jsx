import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems((prev) => {
            const exists = prev.find((cartItem) => cartItem.id === item.id);
            if (exists) {
                return prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
                        : cartItem
                );
            } else {
                return [...prev, { ...item, cantidad: 1 }];
            }
        });
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateItemQuantity = (id, cantidad) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, cantidad } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.cantidad,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItem,
                removeItem,
                updateItemQuantity,
                calculateTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

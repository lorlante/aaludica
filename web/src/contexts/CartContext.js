import React, { useEffect, useState } from "react";

export const CartContext = React.createContext({ items: [] });

function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    let cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  });

  function add(id, quantity, name, main_photo, price) {
    let item = items.find((i) => i.id === id);
    let result;

    if (!item) {
      result = [...items, { id, name, main_photo, price, quantity }];
    } else {
      result = items.map((i) =>
        i.id === item.id ? { ...item, quantity: item.quantity + quantity } : i
      );
    }

    setItems(result);
  }

  function remove(id, quantityToRemove) {
    let item = items.find((i) => i.id === id);
    let result;

    if (item) {
      if (item.quantity > quantityToRemove) {
        result = items.map((i) =>
          i.id === item.id
            ? { ...item, quantity: item.quantity - quantityToRemove }
            : i
        );
      } else {
        result = items.filter((i) => i.id !== item.id);
      }
      setItems(result);
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  return (
    <CartContext.Provider value={{ items, add, remove }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

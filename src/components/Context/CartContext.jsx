import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [{ name: "NADA AUN", price: 0, quantity: 1 }],
  totalPrice: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItem = (item) => {
    console.log("enCartContext:" + item.name);
    if (cart.addedItems.some((addedItem) => addedItem.name === item.name)) {
      item.quantity += cart.addedItems.quantity;
      setCart(item);
      // console.log(cart.name + " " + cart.quantity + " " + cart.price);
      return;
    }

    const newAddedItems = cart.addedItems.map((product) => {
      if (product.name === "Bicicleta") return { ...product, quantity: 2 };

      return product;
    });
    setCart({ ...cart, addedItems: newAddedItems });
  };

  const clear = () => {
    setCart(INITIAL_STATE);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
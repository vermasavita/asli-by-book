import { createContext, useContext } from "react";
import { useReducer } from "react";
import { CartReducer } from "../reducer/cart-reducer";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, { cart: [] });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

/* eslint-disable react/prop-types */

import { createContext, useReducer } from "react";

export const CartContext = createContext({
  cartProducts: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  let updatedCartProducts;

  if (action.type === "ADD_PRODUCT") {
    const existingCartItemIndex = state.cartProducts.findIndex(
      (cartProduct) => cartProduct.id === action.cartProduct.id
    );

    updatedCartProducts = [...state.cartProducts];

    if (existingCartItemIndex > -1) {
      const existingCartProduct = updatedCartProducts[existingCartItemIndex];
      const updatedCartProduct = {
        ...existingCartProduct,
        quantity: existingCartProduct.quantity + 1,
      };
      updatedCartProducts[existingCartItemIndex] = updatedCartProduct;
    } else {
      updatedCartProducts.push({ ...action.cartProduct, quantity: 1 });
    }

    // Update localStorage
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

    return { ...state, cartProducts: updatedCartProducts };
  }

  if (action.type === "REMOVE_PRODUCT") {
    const existingCartItemIndex = state.cartProducts.findIndex(
      (cartProduct) => cartProduct.id === action.id
    );

    if (existingCartItemIndex === -1) {
      return state;
    }

    updatedCartProducts = [...state.cartProducts];
    const existingCartProduct = state.cartProducts[existingCartItemIndex];

    if (existingCartProduct.quantity === 1) {
      updatedCartProducts.splice(existingCartItemIndex, 1);
    } else {
      const updatedCartProduct = {
        ...existingCartProduct,
        quantity: existingCartProduct.quantity - 1,
      };
      updatedCartProducts[existingCartItemIndex] = updatedCartProduct;
    }

    // Update localStorage
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

    return { ...state, cartProducts: updatedCartProducts };
  }

  if (action.type === "CLEAR_CART") {
    // Clear localStorage
    localStorage.removeItem("cartProducts");

    return { ...state, cartProducts: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartFunction] = useReducer(cartReducer, {
    cartProducts: [],
  });

  function addProduct(cartProduct) {
    dispatchCartFunction({ type: "ADD_PRODUCT", cartProduct });
  }

  function removeProduct(id) {
    dispatchCartFunction({ type: "REMOVE_PRODUCT", id });
  }

  function clearCart() {
    dispatchCartFunction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    cartProducts: cart.cartProducts,
    addProduct,
    removeProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;

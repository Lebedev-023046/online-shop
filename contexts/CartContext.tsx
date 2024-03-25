"use client";

import { createContext, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";

import { CartItem } from "@/features/cart";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartContext {
  cart: CartItem[];

  addCartItem: (value: CartItem) => void;
  updateCartItem: (value: CartItem) => void;
  deleteCartItem: (value: number) => void;
  emptyCart: () => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addCartItem: () => {},
  updateCartItem: () => {},
  deleteCartItem: () => {},
  emptyCart: () => {},
});

export const CartProvider = ({ children }: ICartProvider) => {
  const [lsCart, setLsCart] = useLocalStorage<CartItem[]>({
    initialValue: [],
    key: "cart",
  });

  const [cartState, setCart] = useState<CartItem[]>(lsCart);

  const addCartItem = useCallback(
    (item: CartItem) => {
      setCart(prev => [item, ...prev]);
      setLsCart(prev => [item, ...prev]);
      toast.success("Товар добавлен в корзину!");
    },
    [setLsCart],
  );

  const updateCartItem = useCallback(
    (itemToUpdate: CartItem) => {
      const updateItem = (prev: CartItem[]) =>
        prev.map(item => (item.id === itemToUpdate.id ? itemToUpdate : item));

      setCart(prev => updateItem(prev));
      setLsCart(prev => updateItem(prev));
      toast.success("Товар обновлен!");
    },
    [setLsCart],
  );

  const deleteCartItem = useCallback(
    (itemIdToDelete: number) => {
      const deleteItem = (prev: CartItem[]) =>
        prev.filter(item => item.id !== itemIdToDelete);

      setCart(prev => deleteItem(prev));
      setLsCart(prev => deleteItem(prev));
      toast.success("Товар удален из корзины!");
    },
    [setLsCart],
  );

  const emptyCart = useCallback(() => {
    setCart([]);
    setLsCart([]);
  }, [setLsCart]);

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        addCartItem,
        updateCartItem,
        deleteCartItem,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

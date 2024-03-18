"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
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
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addCartItem: () => {},
  updateCartItem: () => {},
  deleteCartItem: () => {},
});

export const CartProvider = ({ children }: ICartProvider) => {
  const [lsCart, setLsCart] = useLocalStorage<CartItem[]>({
    initialValue: [],
    key: "cart",
  });

  const [cartState, setCart] = useState<CartItem[]>(lsCart);
  const cart = useMemo(() => cartState, [cartState]);

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

  return (
    <CartContext.Provider
      value={{ cart, addCartItem, updateCartItem, deleteCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

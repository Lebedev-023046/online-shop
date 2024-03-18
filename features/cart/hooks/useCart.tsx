import { useCartContext } from "@/contexts/CartContext";

export const useCart = () => {
  const { cart } = useCartContext();
};

import { createContext, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";

import { UserOrder } from "@/features/order";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const OrderContext = createContext({
  order: {} as UserOrder,
  initOrder: (order: UserOrder) => {},
  updateOrder: (order: UserOrder) => {},
  deleteOrder: () => {},
});

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [lsOrder, setLsOrder] = useLocalStorage<UserOrder>({
    initialValue: {} as UserOrder,
    key: "order",
  });
  const [order, setOrder] = useState<UserOrder>(lsOrder);

  const initOrder = useCallback(
    (order: UserOrder) => {
      setOrder(order);
      setLsOrder(order);
      toast.success(
        "Заказ создан. Наш оператор свяжется с вами в ближайшее время!",
      );
    },
    [setLsOrder],
  );
  const updateOrder = useCallback(
    (order: UserOrder) => {
      setOrder(order);
      setLsOrder(order);
      toast.success("Заказ обновлен!");
    },
    [setLsOrder],
  );
  const deleteOrder = useCallback(() => {
    setOrder({} as UserOrder);
    setLsOrder({} as UserOrder);
  }, [setLsOrder]);

  return (
    <OrderContext.Provider
      value={{ order, initOrder, updateOrder, deleteOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);

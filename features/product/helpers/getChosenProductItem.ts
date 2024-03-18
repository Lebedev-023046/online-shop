import { $Enums, ProductItem } from "@/prisma/generated";

interface Props {
  productItems: ProductItem[];
  size: $Enums.Size;
}

export const getChosenProductItem = ({
  productItems,
  size,
}: Props): ProductItem => {
  return productItems.find(item => item.size === size) as ProductItem;
};

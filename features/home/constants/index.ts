export type CategoryName = "Костюмы" | "Худи" | "Футболки" | "Палаццо";
export type CategoryHref = "suit" | "hoodie" | "t-shirt" | "palazzo";

interface Props {
  categoryName: CategoryName;
  categoryHref: CategoryHref;
}

export const RAW_ORDER_INFO: Props[] = [
  {
    categoryName: "Костюмы",
    categoryHref: "suit",
  },
  {
    categoryName: "Худи",
    categoryHref: "hoodie",
  },
  {
    categoryName: "Футболки",
    categoryHref: "t-shirt",
  },
  {
    categoryName: "Палаццо",
    categoryHref: "palazzo",
  },
];

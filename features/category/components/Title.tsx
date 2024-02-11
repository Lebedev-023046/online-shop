interface Props {
  categoryName: string;
}

type CategoryMapOptions = {
  [key: string]: string;
};

const categoryMap: CategoryMapOptions = {
  hoodie: "Худи",
  suit: "Костюмы",
  ["t-shirt"]: "Футболки",
  palazzo: "Палаццо",
};

export function Title({ categoryName }: Props) {
  return (
    <div className="p-6 text-center text-2xl font-medium">
      {categoryMap[categoryName]}
    </div>
  );
}

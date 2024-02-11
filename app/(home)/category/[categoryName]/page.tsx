import { Products, Title } from "@/features/category";

export default function CategoryPage({
  params,
}: {
  params: { categoryName: string };
}) {
  const { categoryName } = params;
  return (
    <div className="mx-auto w-[95%]">
      <Title categoryName={categoryName} />
      <Products />
    </div>
  );
}

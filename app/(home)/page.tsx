import { ContentRaws, Hero } from "@/features/home";
import { IProductPreview } from "@/types";

export default async function Home() {
  // const response = await fetch("/api/product");

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/product`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const productPreviews = await response.json();

  // console.log("productPreviews: ", productPreviews);

  return (
    <div className="mx-auto">
      <Hero />
      <ContentRaws productPreviews={productPreviews} />
    </div>
  );
}

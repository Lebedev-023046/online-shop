import { productItems } from "./productItems";
import { products } from "./products";
import { PrismaClient } from "../generated";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  // for (const product of products) {
  //   const user = await prisma.product.create({
  //     data: product,
  //   });
  //   console.log(`Created product with id: ${user.id}`);
  // }
  for (const productItem of productItems) {
    const productInfo = await prisma.productItem.create({
      data: productItem,
    });
    console.log(`Created productItem with id: ${productInfo.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

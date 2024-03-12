-- CreateEnum
CREATE TYPE "product_category" AS ENUM ('HOODIE', 'PALAZZO', 'SUIT', 'T_SHIRT');

-- CreateEnum
CREATE TYPE "size" AS ENUM ('XS', 'S', 'M', 'L', 'XL');

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" VARCHAR(20000) NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productImage" VARCHAR(500) NOT NULL,
    "category_name" "product_category" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_item" (
    "id" SERIAL NOT NULL,
    "qty_in_stock" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "size" "size" NOT NULL,
    "article" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product_item" ADD CONSTRAINT "product_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

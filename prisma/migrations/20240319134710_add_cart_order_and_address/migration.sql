-- CreateEnum
CREATE TYPE "payment_method" AS ENUM ('CASH', 'CREDIT_CARD', 'DEBIT_CARD');

-- AlterTable
ALTER TABLE "product_item" ADD COLUMN     "qty_in_cart" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "city" VARCHAR(200) NOT NULL,
    "street_number" VARCHAR(20) NOT NULL,
    "unit_number" VARCHAR(20) NOT NULL,
    "entrance_number" VARCHAR(50) NOT NULL,
    "flat_number" VARCHAR(50) NOT NULL,
    "postal_code" VARCHAR(20) NOT NULL,
    "user_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipping_method" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shipping_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_status_variation" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_status_variation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_status" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(200) NOT NULL,
    "order_status_variation_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "phone_number" VARCHAR(50) NOT NULL,
    "total_order_price" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT,
    "payment_method" "payment_method" NOT NULL,
    "address_id" INTEGER NOT NULL,
    "shipping_method_id" INTEGER NOT NULL,
    "order_status_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "address_user_id_key" ON "address"("user_id");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_status" ADD CONSTRAINT "order_status_order_status_variation_id_fkey" FOREIGN KEY ("order_status_variation_id") REFERENCES "order_status_variation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_shipping_method_id_fkey" FOREIGN KEY ("shipping_method_id") REFERENCES "shipping_method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_order_status_id_fkey" FOREIGN KEY ("order_status_id") REFERENCES "order_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

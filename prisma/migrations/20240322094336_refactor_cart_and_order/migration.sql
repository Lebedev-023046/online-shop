/*
  Warnings:

  - You are about to drop the column `street_number` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `order_status_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `shipping_method_id` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `order_status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_status_variation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shipping_method` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `street_name` to the `address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delivering_method` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_status` to the `order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `payment_method` on the `order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Cash', 'CardOnReceipt', 'CardOnline');

-- CreateEnum
CREATE TYPE "DeliveringMethod" AS ENUM ('Courier', 'Pickup', 'Post');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('Pending', 'Processing', 'Delivered', 'Canceled');

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_order_status_id_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_shipping_method_id_fkey";

-- DropForeignKey
ALTER TABLE "order_status" DROP CONSTRAINT "order_status_order_status_variation_id_fkey";

-- AlterTable
ALTER TABLE "address" DROP COLUMN "street_number",
ADD COLUMN     "street_name" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "order" DROP COLUMN "order_status_id",
DROP COLUMN "shipping_method_id",
ADD COLUMN     "delivering_method" "DeliveringMethod" NOT NULL,
ADD COLUMN     "order_status" "OrderStatus" NOT NULL,
DROP COLUMN "payment_method",
ADD COLUMN     "payment_method" "PaymentMethod" NOT NULL;

-- DropTable
DROP TABLE "order_status";

-- DropTable
DROP TABLE "order_status_variation";

-- DropTable
DROP TABLE "shipping_method";

-- DropEnum
DROP TYPE "payment_method";

-- CreateTable
CREATE TABLE "order_line" (
    "id" SERIAL NOT NULL,
    "qty_ordered" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "product_item_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_line_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order_line" ADD CONSTRAINT "order_line_product_item_id_fkey" FOREIGN KEY ("product_item_id") REFERENCES "product_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_line" ADD CONSTRAINT "order_line_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

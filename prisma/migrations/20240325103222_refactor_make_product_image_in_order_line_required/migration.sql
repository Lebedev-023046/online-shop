/*
  Warnings:

  - Made the column `productImage` on table `order_line` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "order_line" ALTER COLUMN "productImage" SET NOT NULL,
ALTER COLUMN "productImage" SET DEFAULT '';

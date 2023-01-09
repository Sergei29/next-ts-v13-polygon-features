/*
  Warnings:

  - Made the column `updatedAt` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "updatedAt" SET NOT NULL;

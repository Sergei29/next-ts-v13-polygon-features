/*
  Warnings:

  - Made the column `createdAt` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Author" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "createdAt" SET NOT NULL;

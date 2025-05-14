/*
  Warnings:

  - You are about to drop the column `firstCategory` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `secondCategory` on the `Request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "firstCategory",
DROP COLUMN "secondCategory";

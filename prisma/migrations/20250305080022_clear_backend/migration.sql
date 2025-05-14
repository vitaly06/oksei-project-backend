/*
  Warnings:

  - You are about to drop the `Logo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stack` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `taskType` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "taskType" TEXT NOT NULL;

-- DropTable
DROP TABLE "Logo";

-- DropTable
DROP TABLE "Stack";

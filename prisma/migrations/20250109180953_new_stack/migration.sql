/*
  Warnings:

  - You are about to drop the `stack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "stack";

-- CreateTable
CREATE TABLE "Stack" (
    "stackId" SERIAL NOT NULL,
    "areaName" TEXT NOT NULL,
    "stack" TEXT NOT NULL,

    CONSTRAINT "Stack_pkey" PRIMARY KEY ("stackId")
);

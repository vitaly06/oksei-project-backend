-- CreateTable
CREATE TABLE "stack" (
    "stackId" SERIAL NOT NULL,
    "areaName" TEXT NOT NULL,
    "stack" TEXT NOT NULL,

    CONSTRAINT "stack_pkey" PRIMARY KEY ("stackId")
);

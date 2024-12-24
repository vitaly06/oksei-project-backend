-- CreateTable
CREATE TABLE "Request" (
    "requestId" SERIAL NOT NULL,
    "organizationName" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "firstCategory" TEXT NOT NULL,
    "secondCategory" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("requestId")
);

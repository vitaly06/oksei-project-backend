-- CreateTable
CREATE TABLE "ProjectCard" (
    "projectId" SERIAL NOT NULL,
    "projectName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,

    CONSTRAINT "ProjectCard_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "teacherId" SERIAL NOT NULL,
    "photoPath" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("teacherId")
);

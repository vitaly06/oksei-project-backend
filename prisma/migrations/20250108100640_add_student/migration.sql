-- CreateTable
CREATE TABLE "Student" (
    "studeintId" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectPhotoPath" TEXT NOT NULL,
    "studentPhotoPath" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studeintId")
);

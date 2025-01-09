/*
  Warnings:

  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `studeintId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `ProjectCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "studeintId",
ADD COLUMN     "studentId" SERIAL NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId");

-- DropTable
DROP TABLE "ProjectCard";

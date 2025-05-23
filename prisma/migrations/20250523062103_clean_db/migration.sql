/*
  Warnings:

  - You are about to drop the column `deadline` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AppUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teacher` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "deadline",
ADD COLUMN     "category" TEXT NOT NULL,
ALTER COLUMN "organizationName" DROP NOT NULL,
ALTER COLUMN "filePath" DROP NOT NULL;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "AppUser";

-- DropTable
DROP TABLE "Student";

-- DropTable
DROP TABLE "Teacher";

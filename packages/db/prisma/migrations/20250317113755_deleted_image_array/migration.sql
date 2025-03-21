/*
  Warnings:

  - You are about to drop the `TraningImages` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `zipUr` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TraningImages" DROP CONSTRAINT "TraningImages_modelId_fkey";

-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "zipUr" TEXT NOT NULL;

-- DropTable
DROP TABLE "TraningImages";

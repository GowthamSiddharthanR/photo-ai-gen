/*
  Warnings:

  - Added the required column `falAiRequestId` to the `OutputImages` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MoelTraningStatusEnum" AS ENUM ('Generated', 'Failed', 'Pending');

-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "falAiRequestId" TEXT,
ADD COLUMN     "status" "MoelTraningStatusEnum" NOT NULL DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "falAiRequestId" TEXT NOT NULL;

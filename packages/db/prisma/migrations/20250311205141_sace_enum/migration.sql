/*
  Warnings:

  - The values [AsianAmerican,EastAsian,SouthEastAsian,SouthAsian,MiddleEastern] on the enum `EhnicityTypeEnum` will be removed. If these variants are still used in the database, this will fail.
  - The values [Others] on the enum `ModelTypeEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EhnicityTypeEnum_new" AS ENUM ('Black', 'white', 'Asian American', 'East Asian', 'South East Asian', 'South Asian', 'Middle Eastern', 'Pacific', 'Hispanic');
ALTER TABLE "Model" ALTER COLUMN "ethnicity" TYPE "EhnicityTypeEnum_new" USING ("ethnicity"::text::"EhnicityTypeEnum_new");
ALTER TYPE "EhnicityTypeEnum" RENAME TO "EhnicityTypeEnum_old";
ALTER TYPE "EhnicityTypeEnum_new" RENAME TO "EhnicityTypeEnum";
DROP TYPE "EhnicityTypeEnum_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ModelTypeEnum_new" AS ENUM ('Man', 'Woman', 'Other');
ALTER TABLE "Model" ALTER COLUMN "type" TYPE "ModelTypeEnum_new" USING ("type"::text::"ModelTypeEnum_new");
ALTER TYPE "ModelTypeEnum" RENAME TO "ModelTypeEnum_old";
ALTER TYPE "ModelTypeEnum_new" RENAME TO "ModelTypeEnum";
DROP TYPE "ModelTypeEnum_old";
COMMIT;

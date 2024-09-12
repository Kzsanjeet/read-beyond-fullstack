/*
  Warnings:

  - Added the required column `documentImagId` to the `provider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "provider" ADD COLUMN     "documentImagId" TEXT NOT NULL;

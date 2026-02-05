/*
  Warnings:

  - You are about to drop the `OtpLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Outing" ADD COLUMN     "studentGender" TEXT NOT NULL DEFAULT 'M';

-- AlterTable
ALTER TABLE "Outpass" ADD COLUMN     "studentGender" TEXT NOT NULL DEFAULT 'M';

-- DropTable
DROP TABLE "OtpLog";

-- CreateIndex
CREATE INDEX "Grievance_status_idx" ON "Grievance"("status");

-- CreateIndex
CREATE INDEX "Grievance_createdAt_idx" ON "Grievance"("createdAt");

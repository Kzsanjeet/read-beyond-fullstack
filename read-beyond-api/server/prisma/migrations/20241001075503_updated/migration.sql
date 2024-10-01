-- DropForeignKey
ALTER TABLE "AddCourse" DROP CONSTRAINT "AddCourse_providerId_fkey";

-- AddForeignKey
ALTER TABLE "AddCourse" ADD CONSTRAINT "AddCourse_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

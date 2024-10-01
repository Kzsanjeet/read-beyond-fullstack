-- CreateTable
CREATE TABLE "AddCourse" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "course_time" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "student_enrolled" INTEGER NOT NULL DEFAULT 0,
    "slug" TEXT NOT NULL,
    "course_view" INTEGER NOT NULL DEFAULT 0,
    "course_level" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "registered_user" INTEGER[],
    "providerId" INTEGER NOT NULL,

    CONSTRAINT "AddCourse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AddCourse" ADD CONSTRAINT "AddCourse_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

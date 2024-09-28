-- CreateTable
CREATE TABLE "Superuser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT '',
    "contact" TEXT NOT NULL DEFAULT '',
    "lastFivePassword" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "twoFAEnabled" BOOLEAN NOT NULL DEFAULT false,
    "wrongPassCounter" INTEGER NOT NULL DEFAULT 0,
    "isPassBlockEnabled" BOOLEAN NOT NULL DEFAULT false,
    "refreshToken" TEXT NOT NULL DEFAULT '',
    "otp" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Superuser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Superuser_email_key" ON "Superuser"("email");

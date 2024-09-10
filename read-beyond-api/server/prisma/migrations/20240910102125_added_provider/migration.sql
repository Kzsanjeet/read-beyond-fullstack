-- CreateTable
CREATE TABLE "provider" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '',
    "avatar" TEXT NOT NULL DEFAULT '',
    "contact" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "providerType" TEXT NOT NULL,
    "documentImage" TEXT NOT NULL DEFAULT '',
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastFivePasswords" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "twoFAEnabled" BOOLEAN NOT NULL DEFAULT false,
    "wrongPasswordCounter" INTEGER NOT NULL DEFAULT 0,
    "isPassBlockEnabled" BOOLEAN NOT NULL DEFAULT false,
    "isFirstLogin" BOOLEAN NOT NULL DEFAULT false,
    "refreshToken" TEXT NOT NULL DEFAULT '',
    "otp" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "provider_pkey" PRIMARY KEY ("id")
);

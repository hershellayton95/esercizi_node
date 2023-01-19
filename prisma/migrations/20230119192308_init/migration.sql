/*
  Warnings:

  - You are about to drop the `Prisma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Prisma";

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

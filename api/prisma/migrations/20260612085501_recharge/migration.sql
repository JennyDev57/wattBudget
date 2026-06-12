/*
  Warnings:

  - You are about to drop the `Recharge` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Recharge";

-- CreateTable
CREATE TABLE "recharge" (
    "id" SERIAL NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "fullHour" INTEGER NOT NULL,
    "offPeakHour" INTEGER NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recharge_pkey" PRIMARY KEY ("id")
);

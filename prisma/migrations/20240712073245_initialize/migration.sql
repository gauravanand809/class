-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "DOB" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "ZipCode" TEXT NOT NULL,
    "ContactNo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bloodgrp" TEXT NOT NULL,
    "Uniqueid" TEXT NOT NULL,
    "Rank" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "Annual_Income" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Class_id_key" ON "Class"("id");

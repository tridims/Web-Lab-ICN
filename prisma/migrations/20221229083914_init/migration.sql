/*
  Warnings:

  - Added the required column `jumlah` to the `barang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barang" ADD COLUMN     "jumlah" INTEGER NOT NULL;

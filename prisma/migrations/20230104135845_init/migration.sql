/*
  Warnings:

  - A unique constraint covering the columns `[kode_peminjaman]` on the table `peminjaman` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nama]` on the table `tags` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kode_peminjaman` to the `peminjaman` table without a default value. This is not possible if the table is not empty.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- AlterTable
ALTER TABLE "peminjaman" ADD COLUMN     "kode_peminjaman" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tags" ALTER COLUMN "nama" SET DATA TYPE CITEXT;

-- CreateIndex
CREATE UNIQUE INDEX "peminjaman_kode_peminjaman_key" ON "peminjaman"("kode_peminjaman");

-- CreateIndex
CREATE UNIQUE INDEX "tags_nama_key" ON "tags"("nama");

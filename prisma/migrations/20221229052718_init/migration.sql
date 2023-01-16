/*
  Warnings:

  - Added the required column `jumlah` to the `barang_on_peminjaman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kembali` to the `peminjaman` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pinjam` to the `peminjaman` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barang_on_peminjaman" ADD COLUMN     "jumlah" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "peminjaman" ADD COLUMN     "kembali" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "pinjam" TIMESTAMP(3) NOT NULL;

/*
  Warnings:

  - Made the column `Nama` on table `Anggota` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Email` on table `Anggota` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NIM_NIP` on table `Anggota` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Nama` on table `Barang` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Judul` on table `Kegiatan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Gambar` on table `Kegiatan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Deskripsi` on table `Kegiatan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Artikel` on table `Kegiatan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Nama` on table `Peminjaman` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NIM` on table `Peminjaman` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NoTelp` on table `Peminjaman` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Alamat` on table `Peminjaman` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Nama` on table `Presensi` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Email` on table `Presensi` required. This step will fail if there are existing NULL values in that column.
  - Made the column `NIM` on table `Presensi` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Keperluan` on table `Presensi` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Nama` on table `Tags` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Anggota" ALTER COLUMN "Nama" SET NOT NULL,
ALTER COLUMN "Email" SET NOT NULL,
ALTER COLUMN "NIM_NIP" SET NOT NULL;

-- AlterTable
ALTER TABLE "Barang" ALTER COLUMN "Nama" SET NOT NULL,
ALTER COLUMN "Deskripsi" DROP NOT NULL,
ALTER COLUMN "Deskripsi" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Kegiatan" ALTER COLUMN "Judul" SET NOT NULL,
ALTER COLUMN "Gambar" SET NOT NULL,
ALTER COLUMN "Deskripsi" SET NOT NULL,
ALTER COLUMN "Artikel" SET NOT NULL;

-- AlterTable
ALTER TABLE "Peminjaman" ALTER COLUMN "Nama" SET NOT NULL,
ALTER COLUMN "NIM" SET NOT NULL,
ALTER COLUMN "NoTelp" SET NOT NULL,
ALTER COLUMN "Alamat" SET NOT NULL;

-- AlterTable
ALTER TABLE "Presensi" ALTER COLUMN "Nama" SET NOT NULL,
ALTER COLUMN "Email" SET NOT NULL,
ALTER COLUMN "NIM" SET NOT NULL,
ALTER COLUMN "NoTelp" DROP DEFAULT,
ALTER COLUMN "Keperluan" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tags" ALTER COLUMN "Nama" SET NOT NULL;

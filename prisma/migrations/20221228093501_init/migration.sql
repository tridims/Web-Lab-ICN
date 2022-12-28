/*
  Warnings:

  - You are about to drop the `Anggota` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AnggotaOnKegiatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Barang` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BarangOnPeminjaman` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kegiatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Peminjaman` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Presensi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagsOnKegiatan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnggotaOnKegiatan" DROP CONSTRAINT "AnggotaOnKegiatan_AnggotaID_fkey";

-- DropForeignKey
ALTER TABLE "AnggotaOnKegiatan" DROP CONSTRAINT "AnggotaOnKegiatan_KegiatanID_fkey";

-- DropForeignKey
ALTER TABLE "BarangOnPeminjaman" DROP CONSTRAINT "BarangOnPeminjaman_BarangID_fkey";

-- DropForeignKey
ALTER TABLE "BarangOnPeminjaman" DROP CONSTRAINT "BarangOnPeminjaman_PeminjamanID_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnKegiatan" DROP CONSTRAINT "TagsOnKegiatan_KegiatanID_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnKegiatan" DROP CONSTRAINT "TagsOnKegiatan_TagsID_fkey";

-- DropTable
DROP TABLE "Anggota";

-- DropTable
DROP TABLE "AnggotaOnKegiatan";

-- DropTable
DROP TABLE "Barang";

-- DropTable
DROP TABLE "BarangOnPeminjaman";

-- DropTable
DROP TABLE "Kegiatan";

-- DropTable
DROP TABLE "Peminjaman";

-- DropTable
DROP TABLE "Presensi";

-- DropTable
DROP TABLE "Tags";

-- DropTable
DROP TABLE "TagsOnKegiatan";

-- CreateTable
CREATE TABLE "anggota" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nim_nip" TEXT NOT NULL,
    "prodi" INTEGER NOT NULL,

    CONSTRAINT "anggota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kegiatan" (
    "id" SERIAL NOT NULL,
    "tipe" INTEGER NOT NULL,
    "judul" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "artikel" TEXT NOT NULL,

    CONSTRAINT "kegiatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags_on_kegiatan" (
    "id" SERIAL NOT NULL,
    "tags_id" INTEGER NOT NULL,
    "kegiatan_id" INTEGER NOT NULL,

    CONSTRAINT "tags_on_kegiatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anggota_on_kegiatan" (
    "id" SERIAL NOT NULL,
    "anggota_id" INTEGER NOT NULL,
    "kegiatan_id" INTEGER NOT NULL,

    CONSTRAINT "anggota_on_kegiatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peminjaman" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "no_telp" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,

    CONSTRAINT "peminjaman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barang" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,

    CONSTRAINT "barang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barang_on_peminjaman" (
    "id" SERIAL NOT NULL,
    "barang_id" INTEGER NOT NULL,
    "peminjaman_id" INTEGER NOT NULL,

    CONSTRAINT "barang_on_peminjaman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "presensi" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "no_telp" TEXT,
    "keperluan" TEXT NOT NULL,

    CONSTRAINT "presensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "anggota_email_key" ON "anggota"("email");

-- CreateIndex
CREATE UNIQUE INDEX "anggota_nim_nip_key" ON "anggota"("nim_nip");

-- AddForeignKey
ALTER TABLE "tags_on_kegiatan" ADD CONSTRAINT "tags_on_kegiatan_tags_id_fkey" FOREIGN KEY ("tags_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_on_kegiatan" ADD CONSTRAINT "tags_on_kegiatan_kegiatan_id_fkey" FOREIGN KEY ("kegiatan_id") REFERENCES "kegiatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota_on_kegiatan" ADD CONSTRAINT "anggota_on_kegiatan_anggota_id_fkey" FOREIGN KEY ("anggota_id") REFERENCES "anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota_on_kegiatan" ADD CONSTRAINT "anggota_on_kegiatan_kegiatan_id_fkey" FOREIGN KEY ("kegiatan_id") REFERENCES "kegiatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_on_peminjaman" ADD CONSTRAINT "barang_on_peminjaman_barang_id_fkey" FOREIGN KEY ("barang_id") REFERENCES "barang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_on_peminjaman" ADD CONSTRAINT "barang_on_peminjaman_peminjaman_id_fkey" FOREIGN KEY ("peminjaman_id") REFERENCES "peminjaman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `Model` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Model";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Anggota" (
    "ID" SERIAL NOT NULL,
    "Nama" TEXT,
    "Email" TEXT,
    "NIM_NIP" TEXT,
    "Prodi" INTEGER NOT NULL,

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Tags" (
    "ID" SERIAL NOT NULL,
    "Nama" TEXT,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Kegiatan" (
    "ID" SERIAL NOT NULL,
    "Tipe" INTEGER NOT NULL,
    "Judul" TEXT,
    "Gambar" TEXT,
    "Deskripsi" TEXT,
    "Artikel" TEXT,

    CONSTRAINT "Kegiatan_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "TagsOnKegiatan" (
    "ID" SERIAL NOT NULL,
    "TagsID" INTEGER NOT NULL,
    "KegiatanID" INTEGER NOT NULL,

    CONSTRAINT "TagsOnKegiatan_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "AnggotaOnKegiatan" (
    "ID" SERIAL NOT NULL,
    "AnggotaID" INTEGER NOT NULL,
    "KegiatanID" INTEGER NOT NULL,

    CONSTRAINT "AnggotaOnKegiatan_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Peminjaman" (
    "ID" SERIAL NOT NULL,
    "Nama" TEXT,
    "NIM" TEXT,
    "NoTelp" TEXT,
    "Alamat" TEXT,

    CONSTRAINT "Peminjaman_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Barang" (
    "ID" SERIAL NOT NULL,
    "Nama" TEXT,
    "Deskripsi" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "BarangOnPeminjaman" (
    "ID" SERIAL NOT NULL,
    "BarangID" INTEGER NOT NULL,
    "PeminjamanID" INTEGER NOT NULL,

    CONSTRAINT "BarangOnPeminjaman_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Presensi" (
    "ID" SERIAL NOT NULL,
    "Nama" TEXT,
    "Email" TEXT,
    "NIM" TEXT,
    "NoTelp" TEXT DEFAULT '',
    "Keperluan" TEXT,

    CONSTRAINT "Presensi_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anggota_Email_key" ON "Anggota"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Anggota_NIM_NIP_key" ON "Anggota"("NIM_NIP");

-- AddForeignKey
ALTER TABLE "TagsOnKegiatan" ADD CONSTRAINT "TagsOnKegiatan_TagsID_fkey" FOREIGN KEY ("TagsID") REFERENCES "Tags"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnKegiatan" ADD CONSTRAINT "TagsOnKegiatan_KegiatanID_fkey" FOREIGN KEY ("KegiatanID") REFERENCES "Kegiatan"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnggotaOnKegiatan" ADD CONSTRAINT "AnggotaOnKegiatan_AnggotaID_fkey" FOREIGN KEY ("AnggotaID") REFERENCES "Anggota"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnggotaOnKegiatan" ADD CONSTRAINT "AnggotaOnKegiatan_KegiatanID_fkey" FOREIGN KEY ("KegiatanID") REFERENCES "Kegiatan"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangOnPeminjaman" ADD CONSTRAINT "BarangOnPeminjaman_BarangID_fkey" FOREIGN KEY ("BarangID") REFERENCES "Barang"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangOnPeminjaman" ADD CONSTRAINT "BarangOnPeminjaman_PeminjamanID_fkey" FOREIGN KEY ("PeminjamanID") REFERENCES "Peminjaman"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

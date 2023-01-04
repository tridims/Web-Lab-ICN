-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

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
    "nama" CITEXT NOT NULL,

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
    "email" TEXT NOT NULL,
    "keperluan" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "pinjam" TIMESTAMP(3) NOT NULL,
    "kembali" TIMESTAMP(3) NOT NULL,
    "kode_peminjaman" TEXT NOT NULL,
    "penerima" TEXT NOT NULL DEFAULT '',
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "peminjaman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barang" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,
    "jumlah" INTEGER NOT NULL,

    CONSTRAINT "barang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barang_on_peminjaman" (
    "id" SERIAL NOT NULL,
    "barang_id" INTEGER NOT NULL,
    "peminjaman_id" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,

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

-- CreateTable
CREATE TABLE "pesan" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "pesan" TEXT NOT NULL,

    CONSTRAINT "pesan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "anggota_email_key" ON "anggota"("email");

-- CreateIndex
CREATE UNIQUE INDEX "anggota_nim_nip_key" ON "anggota"("nim_nip");

-- CreateIndex
CREATE UNIQUE INDEX "tags_nama_key" ON "tags"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "peminjaman_kode_peminjaman_key" ON "peminjaman"("kode_peminjaman");

-- AddForeignKey
ALTER TABLE "tags_on_kegiatan" ADD CONSTRAINT "tags_on_kegiatan_tags_id_fkey" FOREIGN KEY ("tags_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags_on_kegiatan" ADD CONSTRAINT "tags_on_kegiatan_kegiatan_id_fkey" FOREIGN KEY ("kegiatan_id") REFERENCES "kegiatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota_on_kegiatan" ADD CONSTRAINT "anggota_on_kegiatan_anggota_id_fkey" FOREIGN KEY ("anggota_id") REFERENCES "anggota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota_on_kegiatan" ADD CONSTRAINT "anggota_on_kegiatan_kegiatan_id_fkey" FOREIGN KEY ("kegiatan_id") REFERENCES "kegiatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_on_peminjaman" ADD CONSTRAINT "barang_on_peminjaman_barang_id_fkey" FOREIGN KEY ("barang_id") REFERENCES "barang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_on_peminjaman" ADD CONSTRAINT "barang_on_peminjaman_peminjaman_id_fkey" FOREIGN KEY ("peminjaman_id") REFERENCES "peminjaman"("id") ON DELETE CASCADE ON UPDATE CASCADE;

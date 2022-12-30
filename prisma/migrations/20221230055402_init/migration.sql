-- DropForeignKey
ALTER TABLE "anggota_on_kegiatan" DROP CONSTRAINT "anggota_on_kegiatan_kegiatan_id_fkey";

-- DropForeignKey
ALTER TABLE "barang_on_peminjaman" DROP CONSTRAINT "barang_on_peminjaman_peminjaman_id_fkey";

-- DropForeignKey
ALTER TABLE "tags_on_kegiatan" DROP CONSTRAINT "tags_on_kegiatan_kegiatan_id_fkey";

-- AddForeignKey
ALTER TABLE "tags_on_kegiatan" ADD CONSTRAINT "tags_on_kegiatan_kegiatan_id_fkey" FOREIGN KEY ("kegiatan_id") REFERENCES "kegiatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anggota_on_kegiatan" ADD CONSTRAINT "anggota_on_kegiatan_kegiatan_id_fkey" FOREIGN KEY ("kegiatan_id") REFERENCES "kegiatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_on_peminjaman" ADD CONSTRAINT "barang_on_peminjaman_peminjaman_id_fkey" FOREIGN KEY ("peminjaman_id") REFERENCES "peminjaman"("id") ON DELETE CASCADE ON UPDATE CASCADE;

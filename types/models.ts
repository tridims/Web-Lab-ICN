interface Kegiatan {
    id: number,
    judul: string,
    deskripsi: string,
    artikel: string,
    gambar: string,
    tipe: number,
}

interface Pesan {
    email: string,
    pesan: string,
}

interface Anggota {
    id: number,
    nama: string,
    email: string,
    nim_nip: string,
    prodi: number
}

interface Barang {
    id: number,
    nama: string,
    deskripsi?: string,
    jumlah: number,
}

interface Peminjaman {
    id: number,
    nama: string,
    nim: string,
    no_telp: string,
    email: string,
    keperluan: string,
    alamat: string,
    pinjam: Date,
    kembali: Date,
    aktual_kembali: Date,
    kode_peminjaman: string,
    penerima: string,
    barang: any[],
    status: boolean
}

interface Keterlambatan {
    keterlambatan: string,
    denda: string,
}

export type {
    Kegiatan,
    Pesan,
    Anggota,
    Barang,
    Peminjaman,
    Keterlambatan
}
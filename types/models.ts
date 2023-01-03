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

export type {
    Kegiatan,
    Pesan,
    Anggota,
    Barang
}
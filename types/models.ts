interface Kegiatan {
    id: number,
    judul: string,
    deskripsi: string,
    artikel: string,
    gambar: string,
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

export type {
    Kegiatan,
    Pesan,
    Anggota
}
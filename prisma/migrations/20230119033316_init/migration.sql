-- CreateTable
CREATE TABLE "pengumuman" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "isi" TEXT NOT NULL,

    CONSTRAINT "pengumuman_pkey" PRIMARY KEY ("id")
);

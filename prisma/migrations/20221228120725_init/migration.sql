-- CreateTable
CREATE TABLE "pesan" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "pesan" TEXT NOT NULL,

    CONSTRAINT "pesan_pkey" PRIMARY KEY ("id")
);

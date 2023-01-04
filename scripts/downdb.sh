#!/bin/env bash

sudo -u userjarkom bash -c "cd && psql -d databasejarkom -c \"drop table tags_on_kegiatan;drop table barang_on_peminjaman;drop table anggota_on_kegiatan;drop table kegiatan;drop table peminjaman;drop table pesan;drop table presensi;drop table tags;drop table _prisma_migrations;\""

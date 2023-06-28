#!/bin/env bash

sudo -u userjarkom bash -c "cd && psql -d databasejarkom -c \"drop table if exists tags_on_kegiatan;drop table if exists barang_on_peminjaman;drop table if exists anggota_on_kegiatan;drop table if exists anggota;drop table if exists barang;drop table if exists kegiatan;drop table if exists peminjaman;drop table if exists pesan;drop table if exists presensi;drop table if exists tags;drop table if exists pengumuman;drop table if exists _prisma_migrations;\""

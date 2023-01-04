#!/bin/env bash

sudo -u userjarkom bash -c "cd && psql -d databasejarkom -c \"drop table kegiatan;drop table peminjaman;drop table pesan;drop table presensi;drop table tags;drop table _prisma_migrations;\""

import Link from 'next/link'
import { Button, Card } from 'react-daisyui'
import Jumbotron from '../../components/jumbotron'

export default () => {
  return (
    <>
      <Jumbotron title='Layanan' subtitle='Jaringan Berbasis Informasi' buttonText='Lihat Layanan' />
      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <h3 className='text-baseDark font-bold text-3xl mb-8'>Layanan</h3>

        <Link href='/layanan/presensi'>
          <Card side='lg' className='mb-8 shadow-lg hover:scale-101 duration-200 border-2'>
            <Card.Image
              src='/static/absen.png'
              alt='Absen'
              className='w-24 m-8'
            />
            <Card.Body>
              <Card.Title tag='h2' className='text-2xl'>Absen Masuk Laboratorium</Card.Title>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </Card.Body>
          </Card>
        </Link>

        <Link href='/layanan/peminjaman'>
          <Card side='lg' className='mb-8 shadow-lg hover:scale-101 duration-200 border-2'>
            <Card.Image
              src='/static/pinjam.png'
              alt='Pinjam'
              className='w-24 m-8'
            />
            <Card.Body>
              <Card.Title tag='h2' className='text-2xl'>Peminjaman Barang Laboratorium</Card.Title>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </Card.Body>
          </Card>
        </Link>

        <Link href='/layanan/pengembalian'>
          <Card side='lg' className='mb-8 shadow-lg hover:scale-101 duration-200 border-2'>
            <Card.Image
              src='/static/retur.png'
              alt='Retur'
              className='w-24 m-8'
            />
            <Card.Body>
              <Card.Title tag='h2' className='text-2xl'>Pengembalian Barang Laboratorium</Card.Title>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </Card.Body>
          </Card>
        </Link>
      </main>
    </>
  )
}

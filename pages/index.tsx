import Jumbotron from '../components/jumbotron'
import Card from '../components/card'
import Link from 'next/link'

export default () => {
  return (
    <>
      <Jumbotron title='Laboratorium' subtitle='Jaringan Berbasis Informasi' description='Laboratorium Jaringan Berbasis Informasi merupakan salah satu laboratorium komputer yang memfokuskan diri pada bidang pengembangan jaringan berbasis informasi di Fakultas Ilmu Komputer Universitas Brawijaya (FILKOM UB).' buttonText='Tentang Kami' />
      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <div className='mb-20'>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>Penelitian dan Pengabdian</h3>
          <div className='mx-auto'>
            <div className='flex flex-wrap -mx-1 lg:-mx-4'>
              <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
                <Card href='/' title='Test Title' description='Example Description' image='https://api.lorem.space/image/shoes?w=400&h=225' />
              </div>
              <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
                <Card href='/' title='Test Title' description='Example Description' image='https://api.lorem.space/image/shoes?w=400&h=225' />
              </div>
              <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
                <Card href='/' title='Test Title' description='Example Description' image='https://api.lorem.space/image/shoes?w=400&h=225' />
              </div>
              <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
                <Card href='/' title='Test Title' description='Example Description' image='https://api.lorem.space/image/shoes?w=400&h=225' />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-baseDark font-bold text-3xl'>Layanan</h3>
          <div className='my-12 mx-auto'>
            <div className='lg:flex justify-around'>
              <Link href='/layanan/presensi'>
                <div className='mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101'>
                  <img className='mb-6 h-64' src='/static/absen.png' alt='Presensi' />
                  <p className='font-semibold text-lg'>Presensi Masuk Laboratorium</p>
                </div>
              </Link>
              <Link href='/layanan/peminjaman'>
                <div className='mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101'>
                  <img className='mb-6 h-64' src='/static/pinjam.png' alt='Pinjam' />
                  <p className='font-semibold text-lg'>Peminjaman Barang</p>
                </div>
              </Link>
              <Link href='/layanan/pengembalian'>
                <div className='mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101'>
                  <img className='mb-6 h-64' src='/static/retur.png' alt='Retur' />
                  <p className='font-semibold text-lg'>Pengembalian Barang Laboratorium</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

import Jumbotron from '../components/jumbotron'
import Card from '../components/card'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Kegiatan } from '../types/models'
import { t } from '../lib/i18n'


export default () => {
  const [posts, setPosts] = useState<Kegiatan[]>([])

  useEffect(() => {
    fetch('/api/kegiatan')
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.slice(0, 4))
      })
  }, [])


  return (
    <>
      <Jumbotron
        title={t('homepage:title')}
        subtitle={t('homepage:subtitle')}
        description={t('homepage:description')}
        buttonText={t('homepage:about')} />

      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <div className='mb-20'>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>{t('navbar:tri_dharma')}</h3>
          <div className='mx-auto'>
            <div className='flex flex-wrap -mx-1 lg:-mx-4'>
              {
                posts.map((post, key) => (
                  <div key={key} className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
                    <Card href={`/tri-dharma/${post.id}`} title={post.judul} description={post.deskripsi} image={post.gambar} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-baseDark font-bold text-3xl'>{t('navbar:services')}</h3>
          <div className='my-12 mx-auto'>
            <div className='lg:flex justify-around'>
              <Link href='/layanan/presensi'>
                <div className='mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101'>
                  <img className='mb-6 h-64' src='/static/absen.png' alt='Presensi' />
                  <p className='font-semibold text-lg'>{t('services:attendance.item.title')}</p>
                </div>
              </Link>
              <Link href='/layanan/peminjaman'>
                <div className='mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101'>
                  <img className='mb-6 h-64' src='/static/pinjam.png' alt='Pinjam' />
                  <p className='font-semibold text-lg'>{t('services:borrow.item.title')}</p>
                </div>
              </Link>
              <Link href='/layanan/pengembalian'>
                <div className='mb-16 flex flex-col items-center drop-shadow-sm duration-200 hover:scale-101'>
                  <img className='mb-6 h-64' src='/static/retur.png' alt='Retur' />
                  <p className='font-semibold text-lg'>{t('services:return.item.title')}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

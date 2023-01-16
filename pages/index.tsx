import Jumbotron from '../components/jumbotron'
import Card from '../components/card'
import CardContainer from '../components/card-container'
import Content from '../components/content'
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

      <Content>
        <CardContainer
          title={t('navbar:tri_dharma')}
          href='/tri-dharma'
          button={t('button_more')}>
          {
            posts.map((post, key) => (
              <Card
                key={key}
                width={'1/4'}
                href={`/tri-dharma/${post.id}`}
                title={post.judul}
                description={post.deskripsi}
                image={post.gambar} />
            ))
          }
        </CardContainer>

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
      </Content>
    </>
  )
}

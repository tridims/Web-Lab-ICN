import Link from 'next/link'
import { Card } from 'react-daisyui'
import Content from '../../components/content'
import Jumbotron from '../../components/jumbotron'
import { t } from '../../lib/i18n'

export default () => {
  return (
    <>
      <Jumbotron
        title={t('services:page.title')}
        subtitle={t('services:page.subtitle')}
        buttonText={t('services:page.button')} />

      <Content>
        <h3 className='text-baseDark font-bold text-3xl mb-8'>{t('navbar:services')}</h3>

        <Link href='/layanan/presensi'>
          <Card side='lg' className='mb-8 shadow-lg hover:scale-101 duration-200 border-2'>
            <Card.Image
              src='/static/absen.png'
              alt='Absen'
              className='w-24 m-8'
            />
            <Card.Body>
              <Card.Title tag='h2' className='text-2xl'>{t('services:attendance.item.title')}</Card.Title>
              <p>{t('services:attendance.item.description')}</p>
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
              <Card.Title tag='h2' className='text-2xl'>{t('services:borrow.item.title')}</Card.Title>
              <p>{t('services:borrow.item.description')}</p>
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
              <Card.Title tag='h2' className='text-2xl'>{t('services:return.item.title')}</Card.Title>
              <p>{t('services:return.item.description')}</p>
            </Card.Body>
          </Card>
        </Link>
      </Content>
    </>
  )
}

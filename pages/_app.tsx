import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
import { Poppins } from '@next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { i18n, t } from '../lib/i18n'


const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  if (router.locale) {
    i18n.changeLanguage(router.locale)
  }

  return (
    <>
      <Head>
        <title>{t('app_name')}</title>
        <meta name="description" content="Lab Jaringan Berbasis Informasi, Fakultas Ilmu Komputer, Universitas Brawijaya, Malang." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer position='bottom-right' theme='colored' autoClose={3000} />
    </>
  )
}
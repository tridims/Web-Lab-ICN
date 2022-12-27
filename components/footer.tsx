import Link from 'next/link'
import { Input, Button, Textarea, Footer } from 'react-daisyui'
import { Poppins } from '@next/font/google'

export default () => {
  return (
    <footer id='footer'>
      <div className="bg-[url('/static/footer.jpg')] bg-cover bg-center">
        <div className='backdrop-blur-sm p-8 lg:p-16 xl:p-40 backdrop-brightness-75'>
          <p className='text-white font-bold text-2xl lg:text-5xl drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)] mb-6'>MORE INFORMATION</p>
          <p className='text-white text-lg lg:text-xl mb-8'>Hubungi kami via Email untuk mendapatkan informasi lebih lanjut mengenai <br className='hidden lg:block' /> Laboratorium Jaringan Berbasis Informasi.</p>
          <div>
            <div className='mb-4'><Input placeholder='Email Anda' className='w-60 md:w-96' /></div>
            <div className='mb-4'><Textarea placeholder='Pesan' className='w-60 md:w-96 h-32' /></div>
            <div><Button className='bg-base'>Kirim</Button></div>
          </div>
        </div>
      </div>
      <Footer className='py-10 px-44 bg-base bg-gradient-to-b from-[#ffffff20] via-transparent text-neutral-content text-lg'>
        <div>
          <Footer.Title>DIREKTORI</Footer.Title>
          <Link href='/' className='link link-hover'>Home</Link>
          <Link href='/profil' className='link link-hover'>Profil</Link>
          <Link href='/penelitian' className='link link-hover'>Penelitian dan Pengabdian</Link>
          <Link href='/layanan' className='link link-hover'>Layanan</Link>
          <Link href='/kontak' className='link link-hover'>Kontak</Link>
        </div>
        <div>
          <Footer.Title>LAB JARINGAN BERBASIS INFORMASI</Footer.Title>
          <p>Fakultas Ilmu Komputer Gedung F 9.6</p>
          <p>Jl. Veteran No. 8, Malang, 65145, Indonesia</p>
        </div>
      </Footer>
      <div className='bg-base text-center p-8'>
        <p className='text-white'>©{new Date().getFullYear()}. All Rights Reserved. by Lab Jaringan 2022</p>
      </div>
    </footer>
  )
}
import { Button, Dropdown, Menu, Navbar } from 'react-daisyui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default () => {
  const router = useRouter()

  const [textWhite, setTextWhite] = useState(true)

  const changeTextColor = () => {
    const gradient = document.getElementById('gradient')
    const footer = document.getElementById('footer')
    if (gradient === null || footer === null) return true

    return gradient.getBoundingClientRect().top <= 0 && footer.getBoundingClientRect().top >= 32 ? setTextWhite(false) : setTextWhite(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeTextColor)
    return () => {
      window.removeEventListener('scroll', changeTextColor)
    }
  }, [])

  return (
    <Navbar className={'z-50 p-4 fixed backdrop-blur-md ' + (textWhite ? 'text-white' : '')} >
      <Navbar.Start>
        <Dropdown>
          <Button color='ghost' tabIndex={0} className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className='w-52 menu-compact mt-3'>
            <Dropdown.Item href='/'>
              Home
            </Dropdown.Item>
            <Dropdown.Item href='/profil'>
              Profil
            </Dropdown.Item>
            <Dropdown.Item>
              Penelitian dan Pengabdian
            </Dropdown.Item>
            <Dropdown.Item>
              Layanan
            </Dropdown.Item>
            <Dropdown.Item>
              Kontak
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>Lab Jaringan</Link>
      </Navbar.Start>
      <Navbar.Center className='hidden lg:flex'>
        <Menu horizontal className='p-0'>
          <Menu.Item>
            <Link href='/' className={router.pathname == '/' ? 'font-medium' : ''}>Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/profil' className={router.pathname == '/profil' ? 'font-medium' : ''}>Profil</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/penelitian' className={router.pathname == '/penelitian' ? 'font-medium' : ''}>Penelitian dan Pengabdian</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/layanan' className={router.pathname == '/layanan' ? 'font-medium' : ''}>Layanan</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/kontak' className={router.pathname == '/kontak' ? 'font-medium' : ''}>Kontak</Link>
          </Menu.Item>
        </Menu>
      </Navbar.Center>
      <Navbar.End>
        <Button className='bg-white text-black rounded-full px-8'>Sign In</Button>
      </Navbar.End>
    </Navbar >
  )
}
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
    if (gradient === null || footer === null) return setTextWhite(true)

    return gradient.getBoundingClientRect().top <= 0 && footer.getBoundingClientRect().top >= 32 ? setTextWhite(false) : setTextWhite(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeTextColor)
    return () => {
      window.removeEventListener('scroll', changeTextColor)
    }
  }, [])

  return (
    <Navbar className={'z-50 p-4 fixed backdrop-blur-md ' + (textWhite ? 'text-white' : 'text-base shadow-lg')} >
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
          <Dropdown.Menu tabIndex={0} className='w-52 menu-compact mt-3 text-black'>
            <Dropdown.Item href='/' className={router.pathname == '/' ? 'font-semibold' : ''}>
              Home
            </Dropdown.Item>
            <Dropdown.Item href='/profil' className={router.pathname == '/profil' ? 'font-semibold' : ''}>
              Profil
            </Dropdown.Item>
            <Dropdown.Item href='/tri-dharma' className={router.pathname == '/tri-dharma' ? 'font-semibold' : ''}>
              Tri Dharma
            </Dropdown.Item>
            <Dropdown.Item href='/layanan' className={router.pathname == '/layanan' ? 'font-semibold' : ''}>
              Layanan
            </Dropdown.Item>
            <Dropdown.Item href='/kontak' className={router.pathname == '/kontak' ? 'font-semibold' : ''}>
              Kontak
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link href='/' className='btn btn-ghost normal-case text-xl hidden lg:flex'>
          <div className={`w-8 h-8 mr-3 duration-200 ${(textWhite ? 'bg-white' : 'bg-base')}`} style={{
            mask: 'url("/static/logo.svg") no-repeat center',
            WebkitMask: 'url("/static/logo.svg") no-repeat center',
          }} />
          Lab Jaringan
        </Link>
      </Navbar.Start>
      <Navbar.End>
        <Link href='/' className='btn btn-ghost normal-case text-xl flex lg:hidden'>
          <div className={`w-8 h-8 mr-3 duration-200 ${(textWhite ? 'bg-white' : 'bg-base')}`} style={{
            mask: 'url("/static/logo.svg") no-repeat center',
            WebkitMask: 'url("/static/logo.svg") no-repeat center',
          }} />
          Lab Jaringan
        </Link>
        <Menu horizontal className='p-0 hidden lg:flex'>
          <Menu.Item>
            <Link href='/' className={router.pathname == '/' ? 'font-bold' : ''}>Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/profil' className={router.pathname == '/profil' ? 'font-bold' : ''}>Profil</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/tri-dharma' className={router.pathname == '/tri-dharma' ? 'font-bold' : ''}>Tri Dharma</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/layanan' className={router.pathname == '/layanan' ? 'font-bold' : ''}>Layanan</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/kontak' className={router.pathname == '/kontak' ? 'font-bold' : ''}>Kontak</Link>
          </Menu.Item>
        </Menu>
      </Navbar.End>
    </Navbar >
  )
}
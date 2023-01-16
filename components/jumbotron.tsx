import Link from 'next/link'
import { Button } from 'react-daisyui'

interface Props {
  title: string,
  subtitle: string,
  description?: string | null,
  buttonText?: string | null,
  buttonHref?: string | null,
}

export default ({ title, subtitle, description, buttonText, buttonHref }: Props) => {
  const scroll = () => {
    if (buttonHref) return

    const gradient = document.getElementById('gradient')
    if (gradient !== null) gradient.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const button = (
    <Button className='border-0 bg-white text-black hover:bg-[#ffffffdd] px-20 shadow-lg' onClick={scroll}>{buttonText}</Button>
  )

  return (
    <>
      <div className='bg-base text-white pt-[80px]'>
        <div className='py-20 lg:py-28 text-center'>
          <h1 className='text-5xl lg:text-8xl font-bold mb-4 lg:mb-8'>{title}</h1>
          <h2 className='text-2xl lg:text-6xl font-bold mb-4 lg:mb-8'>{subtitle}</h2>
          <p className='mx-4 md:mx-20 lg:text-lg xl:mx-72 mb-8'>{description}</p>
          {
            buttonText &&
            (
              buttonHref
                ? <Link href={buttonHref}>{button}</Link>
                : <>{button}</>
            )

          }
        </div>
      </div>
      <div className='bg-gradient-to-b from-base h-36' id='gradient' />
    </>
  )
}

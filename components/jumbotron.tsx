import { Button } from 'react-daisyui'

interface Props {
  title: string,
  subtitle: string,
  description?: string,
  buttonText: string,
}

export default (props: Props) => {
  const { title, subtitle, description, buttonText } = props

  return (
    <>
      <div className='bg-base text-white pt-[80px]'>
        <div className='py-20 lg:py-28 text-center'>
          <h1 className='text-5xl lg:text-8xl font-bold mb-4 lg:mb-8'>{title}</h1>
          <h2 className='text-2xl lg:text-6xl font-bold mb-4 lg:mb-8'>{subtitle}</h2>
          <p className='mx-4 md:mx-20 lg:text-lg xl:mx-72 mb-8'>{description}</p>
          <Button className='bg-white text-black px-20 shadow-lg'>{buttonText}</Button>
        </div>
      </div>
      <div className='bg-gradient-to-b from-base h-36' id='gradient' />
    </>
  )
}
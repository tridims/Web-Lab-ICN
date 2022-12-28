import { Button } from 'react-daisyui'

interface Props {
  image: string,
  title: string,
}

export default (props: Props) => {
  const { image, title } = props

  return (
    <>
      <div className='text-white pt-[80px] bg-cover' style={{
        backgroundImage: 'url(https://source.unsplash.com/random/1024x512)'
      }}>
        <div className='py-20 lg:py-60 text-center'>
          <h1 className='text-5xl lg:text-8xl font-bold mb-4 lg:mb-8 drop-shadow-lg font-outline-1'>{title}</h1>
        </div>
        <div className='bg-gradient-to-b from-transparent to-white h-36' id='gradient' />
      </div>
    </>
  )
}

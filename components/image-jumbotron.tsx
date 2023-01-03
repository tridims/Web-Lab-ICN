interface Props {
  image: string,
  title: string,
}

export default ({ image, title }: Props) => {
  return (
    <>
      <div className='text-white pt-[80px] bg-cover bg-center' style={{
        backgroundImage: `url(${image})`
      }}>
        <div className='py-20 lg:py-60 text-center'>
          <h1 className='text-5xl lg:text-8xl font-bold mb-4 lg:mb-8 drop-shadow-lg font-outline-1'>{title}</h1>
        </div>
        <div className='bg-gradient-to-b from-transparent to-white h-36' id='gradient' />
      </div>
    </>
  )
}

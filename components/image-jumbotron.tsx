import { t } from "../lib/i18n"
import mapCategory from "../lib/mapcategory"

interface Props {
  image: string,
  category: number,
}

export default ({ image, category }: Props) => {
  return (
    <>
      <div className='text-white pt-[80px] bg-primary'>
        <div>
          <div className='py-20 lg:py-28 text-center'>
            <h1 className='text-5xl lg:text-8xl font-bold mb-4 lg:mb-8'>{mapCategory(category)}</h1>
            <h2 className='text-2xl lg:text-6xl font-bold mb-4 lg:mb-8'>{t('tri-dharma:subtitle')}</h2>
          </div>
          <div className='bg-gradient-to-b from-transparent to-white h-36' id='gradient' />
        </div>
      </div>
      <div className=' -mt-40'>
        <img src={image} alt='Post Image' width='80%' className='aspect-video object-cover mx-auto shadow-xl rounded-3xl' />
      </div>
    </>
  )
}

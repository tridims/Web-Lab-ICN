import Link from "next/link"
import { Button } from "react-daisyui"

interface Props {
  title: string,
  href?: string,
  button?: string | null,
  children: any
}

export default ({ title, href, button, children }: Props) => {
  return (
    <div className='mb-20'>
      <h3 className='text-baseDark font-bold text-3xl mb-8'>{title}</h3>
      <div className='mx-auto'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
          {children}
        </div>
        {
          button && href &&
          <div className='text-right mt-2'>
            <Link href={href}><Button color='primary'>{button}</Button></Link>
          </div>
        }
      </div>
    </div>
  )
}
import { Button } from "react-daisyui"

interface Props {
  title: string,
  href: string,
  button: string,
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
        <div className='text-right mt-2'>
          <a href={href}><Button color='primary'>{button}</Button></a>
        </div>
      </div>
    </div>
  )
}
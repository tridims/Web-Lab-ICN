import { ScriptProps } from 'next/script'

export default (props: ScriptProps) => {
  return (
    <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
      {props.children}
    </main>
  )
}
import { Button, Input, InputGroup } from 'react-daisyui'
import Jumbotron from '../../components/jumbotron'
import { t } from '../../lib/i18n'

export default () => {
  return (
    <>
      <Jumbotron
        title={t('services:return.title')}
        subtitle={t('services:return.subtitle')} />
      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <div className='mb-20'>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>{t('services:return.heading')}</h3>
          <form className='block text-center'>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-60'>{t('form:borrow_id')}</span>
              <Input className='w-full' type='text' placeholder='AQ91JSZ2' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-60'>{t('form:recipient_name')}</span>
              <Input className='w-full' type='text' placeholder='Paulin Suartini' bordered required />
            </InputGroup>
            <div className='text-center'>
              <Button color='warning' className='w-full lg:w-52'>{t('button_send')}</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

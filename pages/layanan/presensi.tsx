import { FormEvent, useState } from 'react'
import { Button, Input, InputGroup } from 'react-daisyui'
import { toast } from 'react-toastify'
import Jumbotron from '../../components/jumbotron'
import { t } from '../../lib/i18n'

export default () => {
  const [email, setEmail] = useState('')
  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [keperluan, setKeperluan] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/presensi', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          email: email,
          nama: nama,
          nim: nim,
          no_telp: noTelp,
          keperluan: keperluan
        })
      })

      if (res.status === 200) {
        setEmail('')
        setNama('')
        setNim('')
        setNoTelp('')
        setKeperluan('')
        toast('Presensi berhasil disimpan.', {
          type: 'success'
        })
      } else {
        toast('Presensi gagal disimpan.', {
          type: 'error'
        })
      }
    }
    catch (err) {
      toast('Presensi gagal disimpan.', {
        type: 'error'
      })
    }
    setLoading(false)
  }

  return (
    <>
      <Jumbotron
        title={t('services:attendance.title')}
        subtitle={t('services:attendance.subtitle')} />
      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <div>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>{t('services:attendance.page.heading')}</h3>
          <form onSubmit={handleSubmit} className='block text-center'>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:email')}</span>
              <Input value={email} onChange={e => setEmail(e.target.value)}
                className='w-full' type='email' placeholder='paulin@ub.ac.id' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:name')}</span>
              <Input value={nama} onChange={e => setNama(e.target.value)}
                className='w-full' type='text' placeholder='Paulin Suartini' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:nim')}</span>
              <Input value={nim} onChange={e => setNim(e.target.value)}
                className='w-full' type='number' placeholder='205150201111099' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:phone')}</span>
              <Input value={noTelp} onChange={e => setNoTelp(e.target.value)}
                className='w-full' type='tel' placeholder='081233382712' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-10 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:purpose')}</span>
              <Input value={keperluan} onChange={e => setKeperluan(e.target.value)}
                className='w-full' type='text' placeholder={t('form:purpose_placeholder')!} bordered required />
            </InputGroup>
            <Button color='warning' className={`w-full lg:w-52 ${isLoading && 'loading'}`}>{t('button_send')}</Button>
          </form>
        </div>
      </main>
    </>
  )
}

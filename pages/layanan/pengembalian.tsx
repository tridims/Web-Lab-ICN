import { FormEvent, useState } from 'react'
import { Button, Input, InputGroup } from 'react-daisyui'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Jumbotron from '../../components/jumbotron'
import Content from '../../components/content'
import { t } from '../../lib/i18n'

export default () => {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    returnItem(code, name)
      .then(response => {
        if (response) {
          setCode('')
          setName('')
        }
      })
  }

  return (
    <>
      <Jumbotron
        title={t('services:return.title')}
        subtitle={t('services:return.subtitle')} />
      <Content>
        <div className='mb-20'>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>{t('services:return.heading')}</h3>
          <form onSubmit={handleSubmit} className='block text-center'>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-60'>{t('form:borrow_id')}</span>
              <Input value={code} onChange={(e) => setCode(e.target.value)}
                className='w-full' type='text' placeholder='A92U32' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-60'>{t('form:recipient_name')}</span>
              <Input value={name} onChange={(e) => setName(e.target.value)}
                className='w-full' type='text' placeholder='Paulin Suartini' bordered required />
            </InputGroup>
            <div className='text-center'>
              <Button color='warning' className='w-full lg:w-52'>{t('button_send')}</Button>
            </div>
          </form>
        </div>
      </Content>
    </>
  )
}

const returnItem = async (code: string, name: string) => {
  const rawResponse = await fetch('/api/pinjam', {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      kode_peminjaman: code,
      penerima: name
    })
  })

  const response = await rawResponse.json()
  console.log(response)
  if (!response.success) {
    toast(`Error: ${response.message}.`, {
      type: 'error'
    })
    return false
  }

  withReactContent(Swal)
    .fire({
      title: <p>Barang berhasil dikembalikan.</p>,
      html: `Terima kasih ${response.data.peminjaman.nama} atas pengembalian barang yang telah dilakukan.`,
      icon: 'success',
      allowOutsideClick: false
    })
  return true
}
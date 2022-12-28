import { Button, Input, InputGroup } from 'react-daisyui'
import Jumbotron from '../../components/jumbotron'

export default () => {
  return (
    <>
      <Jumbotron title='Presensi' subtitle='Masuk Laboratorium' />
      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <div>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>Silakan isi Presensi</h3>
          <form action='' className='block text-center'>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>Email</span>
              <Input className='w-full' type='email' placeholder='paulin@ub.ac.id' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>Nama Lengkap</span>
              <Input className='w-full' type='text' placeholder='Paulin Suartini' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>NIM</span>
              <Input className='w-full' type='number' placeholder='205150201111099' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>No. Telepon</span>
              <Input className='w-full' type='tel' placeholder='081233382712' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-10 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>Keperluan</span>
              <Input className='w-full' type='text' placeholder='Konsultasi' bordered required />
            </InputGroup>
            <Button color='warning' className='w-full lg:w-52'>Kirim</Button>
          </form>
        </div>
      </main>
    </>
  )
}

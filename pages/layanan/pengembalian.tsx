import { Button, Input, InputGroup, Select } from 'react-daisyui'
import Jumbotron from '../../components/jumbotron'

export default () => {
  return (
    <>
      <Jumbotron title='Pengembalian' subtitle='Barang Laboratorium' />
      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <div className='mb-20'>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>Data Pengembalian</h3>
          <form className='block text-center'>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-60'>Kode Peminjaman</span>
              <Input className='w-full' type='text' placeholder='AQ91JSZ2' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-60'>Nama Penerima</span>
              <Input className='w-full' type='text' placeholder='Paulin Suartini' bordered required />
            </InputGroup>
            <div className='text-center'>
              <Button color='warning' className='w-full lg:w-52'>Kirim</Button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

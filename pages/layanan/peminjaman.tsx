import { Button, Input, InputGroup, Select } from 'react-daisyui'
import Jumbotron from '../../components/jumbotron'

export default () => {
  return (
    <>
      <Jumbotron title='Peminjaman' subtitle='Barang Laboratorium' />
      <main className='mx-4 md:mx-20 xl:mx-32 my-16'>
        <div className='text-center mb-20'>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>Tata Tertib Peminjaman Barang</h3>
          <div className='bg-warning p-4 font-semibold rounded-2xl xl:mx-32 mb-4'>Durasi maksimal peminjaman barang adalah 7 hari. Keterlambatan pengembalian DENDA 20.000/hari.</div>
          <div className='bg-warning p-4 font-semibold rounded-2xl xl:mx-32 mb-4'>Barang diwajibkan kembali dalam keadaan baik. Apabila terdapat kerusakan maka wajib mengganti senilai 50% dari harga barang.</div>
          <div className='bg-warning p-4 font-semibold rounded-2xl xl:mx-32'>Barang yang hilang wajib diganti dengan barang serupa.</div>
        </div>
        <div className='mb-20'>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>Data Peminjaman</h3>
          <form className='block text-center'>
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
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>Alamat</span>
              <Input className='w-full' type='text' placeholder='Jl. Veteran' bordered required />
            </InputGroup>
            <hr className='my-8 h-px bg-gray-200 border-0' />
            <InputGroup vertical size='lg' className='mb-6 shadow'>
              <span>Barang</span>
              <Select className='w-full'>
                <option value={'default'} disabled>
                  Pilih barang yang akan dipinjam
                </option>
                <option value={'Homer'}>Homer</option>
                <option value={'Marge'}>Marge</option>
                <option value={'Bart'}>Bart</option>
                <option value={'Lisa'}>Lisa</option>
                <option value={'Maggie'}>Maggie</option>
              </Select>
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>Jumlah</span>
              <Input className='w-full' type='number' placeholder='1' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>Keperluan</span>
              <Input className='w-full' type='text' placeholder='Kegiatan Praktikum' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-72'>Tanggal Peminjaman</span>
              <Input className='w-full' type='date' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-10 shadow max-lg:input-group-vertical'>
              <span className='lg:w-72'>Tanggal Pengembalian</span>
              <Input className='w-full' type='date' bordered required />
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

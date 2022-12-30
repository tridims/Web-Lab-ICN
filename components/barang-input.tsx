import { ChangeEvent, MouseEvent } from "react"
import { Button, Input, Select } from "react-daisyui"
import { Barang } from "../types/models"

interface Props {
  onDelete(event: MouseEvent<HTMLButtonElement>): void,
  onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void,
  barangs: Barang[],
  barang?: Barang,
  jumlah: number,
}

export default (props: Props) => {
  const { onDelete, onChange, jumlah, barangs, barang } = props

  const renderOptions = barangs.map((barang, index) => (
    <option key={index} value={barang.id}>{barang.nama}</option>
  ))

  const renderBarang = (
    <div>
      <div className='mb-6'>
        <h5 className='text-baseDark font-bold text-xl mt-6 mb-3'>Nama Barang</h5>
        {barang?.nama}
      </div>
      <div className='mb-6'>
        <h5 className='text-baseDark font-bold text-xl mt-6 mb-3'>Deskripsi Barang</h5>
        {barang?.deskripsi}
      </div>
      <div>
        <h5 className='text-baseDark font-bold text-xl mt-6 mb-3'>Stok Barang</h5>
        {barang?.jumlah}
      </div>
    </div>
  )

  return (
    <div className='p-4 lg:p-8 shadow-lg border-2 rounded-xl mb-8'>
      <div className='flex justify-between'>
        <div>
          <select name='barang' onChange={onChange}
            className='select mr-4 focus:outline-offset-0 select-bordered' value={barang ? barang.id : -1}>
            <option disabled value={-1}>
              Pilih barang yang akan dipinjam
            </option>
            {renderOptions}
          </select>
          <Input name='jumlah' value={jumlah || ''} onChange={onChange}
            type='number' className='mr-4' placeholder='Jumlah' max={barang ? barang.jumlah : 0} bordered required />
        </div>
        <Button onClick={onDelete} color='error' type='button' className='text-xl'>🗑</Button>
      </div>
      {barang && renderBarang}
    </div>
  )
}
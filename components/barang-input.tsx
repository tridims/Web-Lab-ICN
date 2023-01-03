import { ChangeEvent, MouseEvent } from 'react'
import { Button, Input } from 'react-daisyui'
import { Barang } from '../types/models'
import { t } from '../lib/i18n'

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
        <h5 className='text-baseDark font-bold text-xl mt-6 mb-3'>{t('services:borrow.item_name')}</h5>
        {barang?.nama}
      </div>
      <div className='mb-6'>
        <h5 className='text-baseDark font-bold text-xl mt-6 mb-3'>{t('services:borrow.item_description')}</h5>
        {barang?.deskripsi}
      </div>
      <div>
        <h5 className='text-baseDark font-bold text-xl mt-6 mb-3'>{t('services:borrow.item_stock')}</h5>
        {barang?.jumlah}
      </div>
    </div>
  )

  return (
    <div className='p-4 lg:p-8 shadow-lg border-2 rounded-xl mb-8'>
      <div className='lg:flex'>
        <div className='mb-4 lg:mb-0'>
          <select name='barang' value={barang ? barang.id : -1} onChange={onChange}
            className='select mr-4 focus:outline-offset-0 select-bordered w-full lg:w-auto'>
            <option disabled value={-1}>
              {t('form:item_placeholder')}
            </option>
            {renderOptions}
          </select>
        </div>
        <div className='flex justify-between lg:w-full'>
          <Input name='jumlah' value={jumlah || ''} onChange={onChange}
            type='number' className='mr-4 w-full lg:w-auto' placeholder={t('form:amount_placeholder')!} max={barang ? barang.jumlah : 0} bordered required />
          <Button onClick={onDelete} color='error' type='button' className='text-xl'>🗑</Button>
        </div>
      </div>
      {barang && renderBarang}
    </div>
  )
}
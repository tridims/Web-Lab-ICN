import { Peminjaman } from "../../types/models"

function Peminjaman({ nama, nim, no_telp, email, keperluan, alamat, pinjam, kembali, kode_peminjaman, barang }: Peminjaman) {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '50px 0',
    }}>
      <div style={{
        padding: '15px',
        borderRadius: '100%',
        width: '100px',
        height: '100px',
        margin: '0 auto',
        backgroundImage: 'url("https://raw.githubusercontent.com/Evan-aja/lab-jarkom-fe/development/public/static/logo.png")',
        backgroundSize: 'contain'
      }} />
      <div style={{
        margin: '20px auto 20px auto',
        backgroundColor: 'white',
        borderRadius: '3px',
        border: '1px solid #f1f1f1',
        width: '800px',
        padding: '30px',
      }}>
        <div style={{
          marginBottom: '2rem'
        }}>
          <p>Halo <b>{nama}</b>,</p>
          <p>Terima kasih telah melakukan peminjaman kepada Laboratorium Jaringan Berbasis Informasi. Berikut adalah detail peminjaman Anda.</p>
        </div>
        <table>
          <tbody>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Nama</th>
              <td>:</td>
              <td>{nama}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>NIM</th>
              <td>:</td>
              <td>{nim}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Nomor Telepon</th>
              <td>:</td>
              <td>{no_telp}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Email</th>
              <td>:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Keperluan</th>
              <td>:</td>
              <td>{keperluan}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Alamat</th>
              <td>:</td>
              <td>{alamat}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Tanggal Peminjaman</th>
              <td>:</td>
              <td>{new Date(pinjam).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Tanggal Pengembalian</th>
              <td>:</td>
              <td>{new Date(kembali).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Kode Peminjaman</th>
              <td>:</td>
              <td>{kode_peminjaman}</td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: 'center' }}>
          <h2>Detail Barang</h2>
        </div>
        {
          barang.map(brg => (
            <div style={{
              backgroundColor: '#fafafa',
              border: '1px solid #f3f3f3',
              padding: '15px 20px',
              marginBottom: '12px'
            }}>
              <h3 style={{ margin: '0' }}>Nama Barang</h3>
              <p>{brg.barang.nama}</p>
              <h3 style={{ margin: '0' }}>Deskripsi Barang</h3>
              <p>{brg.barang.deskripsi}</p>
              <h3 style={{ margin: '0' }}>Jumlah</h3>
              <p>{brg.jumlah}</p>
            </div>
          ))
        }
      </div>
      <div style={{
        color: '#acacac',
        textAlign: 'center'
      }}>
        ©2023. All Rights Reserved. by Lab Jaringan 2022
      </div>
    </div >
  )
}

export default Peminjaman
import { Peminjaman, Keterlambatan } from "../../types/models"

function Peminjaman({ nama, nim, no_telp, email, keperluan, alamat, pinjam, kembali, aktual_kembali, kode_peminjaman }: Peminjaman, terlambat: Keterlambatan) {
  const late = (Object.keys(terlambat).length !== 0)

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
        backgroundImage: 'url("https://raw.githubusercontent.com/Lab-ICN/Web-Lab-ICN/main/public/static/logo.png")',
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
          <p>Terima kasih telah melakukan pengembalian kepada Laboratorium Jaringan Berbasis Informasi. Berikut adalah detail pengembalian Anda.</p>
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
              <th scope='row' style={{ textAlign: 'start' }}>Aktual Pengembalian</th>
              <td>:</td>
              <td>{new Date(aktual_kembali).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
            </tr>
            <tr>
              <th scope='row' style={{ textAlign: 'start' }}>Kode Peminjaman</th>
              <td>:</td>
              <td>{kode_peminjaman}</td>
            </tr>
          </tbody>
        </table>
        {
          late &&
          <>
            <div style={{
              marginTop: '2rem',
              marginBottom: '2rem'
            }}>
              <p>Dikarenakan pengembalian dilakukan setelah tanggal pengembalian yang dimasukkan, maka Anda mendapatkan denda sebagai berikut.</p>
            </div>
            <table>
              <tbody>
                <tr>
                  <th scope='row' style={{ textAlign: 'start' }}>Keterlambatan</th>
                  <td>:</td>
                  <td>{terlambat.keterlambatan}</td>
                </tr>
                <tr>
                  <th scope='row' style={{ textAlign: 'start' }}>Denda</th>
                  <td>:</td>
                  <td>{terlambat.denda}</td>
                </tr>
              </tbody>
            </table>
          </>
        }
      </div>
      <div style={{
        color: '#acacac',
        textAlign: 'center'
      }}>
        ©2023. All Rights Reserved. by Lab Jaringan 2022
      </div>
    </div>
  )
}

export default Peminjaman
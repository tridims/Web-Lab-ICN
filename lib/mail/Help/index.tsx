function Help(email: string, pesan: string) {
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
          <p>Halo <b>{email}</b>,</p>
          <p>Terima kasih telah mengirimkan pesan kepada kami. Kami akan menanggapi pesan Anda secepatnya.</p>
        </div>
        <div style={{
          backgroundColor: '#fafafa',
          border: '1px solid #f3f3f3',
          padding: '20px',
        }
        }>
          <p><b>Pesan Anda</b></p>
          <p>{pesan}</p>
        </div>
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

export default Help
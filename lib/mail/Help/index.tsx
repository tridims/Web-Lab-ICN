function Help(email: string, pesan: string) {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px 0',
    }}>
      <div style={{
        backgroundColor: '#005776',
        fill: 'currentColor',
        color: 'white',
        padding: '15px',
        borderRadius: '100%',
        width: '100px',
        height: '100px',
        display: 'grid',
        placeItems: 'center',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="60px">
          <path
            d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z" />
        </svg>
      </div>
      <div style={{
        margin: '20px 0',
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
        color: '#acacac'
      }}>
        ©2023. All Rights Reserved. by Lab Jaringan 2022
      </div>
    </div>
  )
}

export default Help
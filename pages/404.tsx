import Card from '../components/card'
import CardContainer from '../components/card-container'
import Content from '../components/content'
import Jumbotron from '../components/jumbotron'
import { t } from '../lib/i18n'
import { useEffect, useState } from 'react'
import { Kegiatan } from '../types/models'

function Custom404() {
  const [posts, setPosts] = useState<Kegiatan[]>([])

  useEffect(() => {
    fetch('/api/kegiatan')
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.slice(0, 4))
      })
  }, [])

  return (
    <>
      <Jumbotron title='404' subtitle={t('error:404_desc')} buttonText={t('error:404_button')} buttonHref='/' />

      <Content>
        <CardContainer
          title={t('error:404_heading')}
          href='/tri-dharma'
          button={t('button_more')}>
          {
            posts.map((post, key) => (
              <Card
                key={key}
                width={'1/4'}
                href={`/tri-dharma/${post.id}`}
                title={post.judul}
                description={post.deskripsi}
                image={post.gambar} />
            ))
          }
        </CardContainer>
      </Content>
    </>
  )
}

export default Custom404
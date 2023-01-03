import { useEffect, useState } from 'react'
import Content from '../../components/content'
import Card from '../../components/card'
import CardContainer from '../../components/card-container'
import Jumbotron from '../../components/jumbotron'
import { t } from '../../lib/i18n'
import { Kegiatan } from '../../types/models'

export default () => {
  const [posts, setPosts] = useState<Kegiatan[]>([])

  useEffect(() => {
    fetch('/api/kegiatan')
      .then(res => res.json())
      .then(data => {
        setPosts(data.data)
      })
  }, [])

  return (
    <>
      <Jumbotron
        title={t('tri-dharma:title')}
        subtitle={t('tri-dharma:subtitle')}
        description={t('tri-dharma:description')}
        buttonText={t('tri-dharma:button')} />

      <Content>
        <CardContainer
          title={t('navbar:tri_dharma')}
          href='/tri-dharma'
          button={t('button_more')}>
          {
            posts
              .filter(post => post.tipe === 1)
              .slice(0, 4)
              .map((post, key) => (
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

        <CardContainer
          title={t('navbar:tri_dharma')}
          href='/tri-dharma'
          button={t('button_more')}>
          {
            posts
              .filter(post => post.tipe === 2)
              .slice(0, 4)
              .map((post, key) => (
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

        <CardContainer
          title={t('navbar:tri_dharma')}
          href='/tri-dharma'
          button={t('button_more')}>
          {
            posts
              .filter(post => post.tipe === 3)
              .slice(0, 4)
              .map((post, key) => (
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

        <CardContainer
          title={t('navbar:tri_dharma')}
          href='/tri-dharma'
          button={t('button_more')}>
          {
            posts
              .filter(post => post.tipe === 4)
              .slice(0, 4)
              .map((post, key) => (
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

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const namespaces = [
  'common',
  'article',
  'navbar',
  'footer',
  'homepage',
  'form',
  'services',
  'profile',
  'tri-dharma',
  'error'
]

const languages = {
  en: 'en-US',
  id: 'id-ID'
}

const resources = Object.entries(languages).reduce((curr, language) => {
  const [route, dir] = language
  return {
    ...curr,
    [route]: namespaces.reduce((a, v) => ({ ...a, [v]: require(`../locales/${dir}/${v}.json`) }), {})
  }
}, {})

i18n
  .use(initReactI18next)
  .init({
    defaultNS: 'common',
    lng: 'id',
    ns: namespaces,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  })

const { t } = i18n

export {
  i18n,
  t
}
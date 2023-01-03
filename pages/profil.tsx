import Jumbotron from '../components/jumbotron'
import { t } from '../lib/i18n'

export default () => {
  return (
    <>
      <Jumbotron
        title={t('profile:title')}
        subtitle={t('profile:subtitle')}
        description={t('profile:description')}
        buttonText={t('profile:button')} />
    </>
  )
}
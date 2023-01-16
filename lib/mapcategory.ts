import { t } from "./i18n"

const mapCategory = (category: number) => {
  const categories = {
    1: t('tri-dharma:research'),
    2: t('tri-dharma:dedication'),
    3: t('tri-dharma:education'),
    4: t('tri-dharma:other')
  }
  return (categories as any)[category]
}

export default mapCategory
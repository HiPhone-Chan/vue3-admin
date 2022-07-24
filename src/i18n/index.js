import { createI18n, useI18n } from 'vue-i18n'
import enUS from './en-US'
import zhCN from './zh-CN'
import elementEnLocale from 'element-plus/dist/locale/en.mjs'
import elementZhLocale from 'element-plus/dist/locale/zh-cn.mjs'

export const messages = {
  'en-US': {
    ...enUS,
    ...elementEnLocale
  },
  'zh-CN': {
    ...zhCN,
    ...elementZhLocale
  }
}

export function getLanguage() {
  const chooseLanguage = localStorage.getItem('language')
  if (chooseLanguage) {
    return chooseLanguage
  }

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh-CN'
}

export const i18n = createI18n({
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n.global

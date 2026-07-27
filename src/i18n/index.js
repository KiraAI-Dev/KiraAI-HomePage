import { createI18n } from 'vue-i18n'
import zh from './locales/zh.js'
import ja from './locales/ja.js'
import en from './locales/en.js'

const STORAGE_KEY = 'kiraai-locale'

export const SUPPORTED_LOCALES = [
  { code: 'zh', name: '简体中文' },
  { code: 'ja', name: '日本語' },
  { code: 'en', name: 'English' },
]

const HTML_LANGS = { zh: 'zh-CN', ja: 'ja', en: 'en' }

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LOCALES.some((l) => l.code === saved)) return saved
  } catch {}
  const lang = navigator.language || ''
  if (lang.startsWith('zh')) return 'zh'
  if (lang.startsWith('ja')) return 'ja'
  return 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { zh, ja, en },
})

export function applyLocaleMeta() {
  const { t, locale } = i18n.global
  document.documentElement.lang = HTML_LANGS[locale.value] || locale.value
  document.title = t('meta.title')
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', t('meta.description'))
}

export function setLocale(code) {
  if (!SUPPORTED_LOCALES.some((l) => l.code === code)) return
  i18n.global.locale.value = code
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {}
  applyLocaleMeta()
}

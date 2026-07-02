import { createContext, useContext } from 'react'
import { translations } from '@/locales/translations'

export type LanguageType = 'ru' | 'en'

export const LOCALES = {
  ENGLISH: 'en',
  RUSSIAN: 'ru',
} as const

export type LocaleType = (typeof LOCALES)[keyof typeof LOCALES]

export type TranslationsType = (typeof translations)[LocaleType]

// Создаем контекст с дефолтным значением
export const TranslationContext = createContext<TranslationsType>(
  translations[LOCALES.ENGLISH],
)

// Хук с проверкой (опционально, но полезно)
export const useTranslator = (): TranslationsType => {
  const context = useContext(TranslationContext)

  return context
}

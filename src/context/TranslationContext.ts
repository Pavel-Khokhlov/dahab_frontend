import { createContext, useContext } from 'react'
import { translations } from '@/locales/translations'

export type LanguageType = 'ru' | 'en'

export enum LOCALES {
  ENGLISH = 'en',
  RUSSIAN = 'ru',
}

export type TranslationsType = (typeof translations)[LOCALES.ENGLISH]

// Создаем контекст с дефолтным значением
export const TranslationContext = createContext<TranslationsType>(
  translations[LOCALES.ENGLISH],
)

// Хук с проверкой (опционально, но полезно)
export const useTranslator = (): TranslationsType => {
  const context = useContext(TranslationContext)

  return context
}

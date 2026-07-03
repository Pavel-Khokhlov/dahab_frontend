export const LOCALES = {
  ENGLISH: 'en',
  RUSSIAN: 'ru',
} as const;

export type LocaleType = (typeof LOCALES)[keyof typeof LOCALES];
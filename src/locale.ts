export enum Locales {
  EN = 'en',
  ES = 'es'
}

export type Locale = {
  value: Locales
  caption: string
}

export type Language = {
  id: string,
  title: string,
  locale: Locales
}
export enum Locales {
  EN = 'en',
  ES = 'es'
}

export type Language = {
  id: string;
  title: string;
  locale: Locales;
};

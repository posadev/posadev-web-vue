import { LocaleMessages } from 'vue-i18n';

export default class TitleTexts {
  constructor(
    readonly title: string | LocaleMessages,
    readonly subtitle: string | LocaleMessages | null = null
  ) {}
}

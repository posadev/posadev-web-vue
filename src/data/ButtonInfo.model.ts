import { LocaleMessages } from 'vue-i18n';

export default class ButtonInfo {
  constructor(
    readonly text: string | LocaleMessages,
    readonly isSmall: boolean = false
  ) {}
}

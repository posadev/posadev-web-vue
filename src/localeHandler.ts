import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Locales } from './locale';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import dateTimeFormats from '@/locales/date-time-formats.json';

Vue.use(VueI18n);

class LocaleHandler {
  private messages = {
    [Locales.EN]: en,
    [Locales.ES]: es
  };

  private defaultLocale = Locales.ES;
  private fallbackLocale = Locales.EN;

  private i18n = new VueI18n({
    locale: this.defaultLocale,
    fallbackLocale: this.fallbackLocale,
    messages: this.messages,
    dateTimeFormats
  });

  public changeLocale(locale: Locales): void {
    this.i18n.locale = locale;
  }

  public getI18n(): VueI18n {
    return this.i18n;
  }
}

export default new LocaleHandler();

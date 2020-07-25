import localHandle from '@/localeHandler';
import { Locales } from '@/locale';

describe('Test localhandler', () => {
  it('Test change location', () => {
    localHandle.changeLocale(Locales.EN);
    const i18n = localHandle.getI18n();
    expect(i18n.locale).toBe(Locales.EN);
  });
});

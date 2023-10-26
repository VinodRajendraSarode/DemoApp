import { createI18n } from 'vue-i18n';

export default createI18n({
    legacy: false,
    allowComposition: true,
    locale: 'en',
    globalInjection: true,
    fallbackLocale: 'en',
});

module.exports = {
  i18n: {
    debug: process.env.NODE_ENV === 'development',
    reloadOnPrerender: true,
    defaultLocale: 'tr-TR',
    locales: ['tr-TR', 'en', 'zh-CN'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

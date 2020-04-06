import { colors } from 'src/theme';

const appConfig: AppConfig = {
  appName: 'Next.js Boilerplate',
  appWebsite: 'http://localhost',
  appThemeColor: colors.Secondary,
  googleFonts: ['Roboto:400,700'],
  defaultLocale: {
    code: 'en',
    codeRegion: 'en_GB',
    name: 'English',
  },
  availableLocales: [],
  developerSignature:
    'Created by André Batista <@andrewizbatista> (https://andrebatista.dev)',
};

export default appConfig;

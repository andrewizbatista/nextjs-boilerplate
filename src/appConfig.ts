import theme from 'src/theme';

const appConfig: AppConfig = {
  APP_NAME: 'Next.js Boilerplate',
  APP_DESCRIPTION: 'Next.js Boilerplate by @andrewizbatista',
  APP_DOMAIN: 'http://localhost',
  THEME_COLOR: theme.palette.primary.main,
  LOCALES: [
    {
      CODE: 'en',
      CODE_REGION: 'en_GB',
      NAME: 'English',
    },
  ],
  API_URL: 'https://jsonplaceholder.typicode.com',
  GOOGLE_FONTS: ['Roboto:400,700'],
  DEV_SIGNATURE:
    'Created by André Batista <@andrewizbatista> (https://andrebatista.dev)',
};

export default appConfig;

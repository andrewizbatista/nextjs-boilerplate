const appConfig: IAppConfig = {
  appName: 'nextjs-boilerplate',
  appWebsite: 'https://domain.com',
  appThemeColor: '#8e3545',
  defaultLocale: {
    code: 'en',
    codeRegion: 'en_GB',
    name: 'English',
  },
  availableLocales: [],
};

export default appConfig;

export interface IAppConfig {
  appName: string;
  appWebsite: string;
  appThemeColor: string;
  defaultLocale: ILocale;
  availableLocales?: ILocale[];
}

export interface ILocale {
  code: string;
  codeRegion: string;
  name: string;
}

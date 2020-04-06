interface AppConfig {
  appName: string;
  appWebsite: string;
  appThemeColor: string;
  googleFonts?: string[];
  defaultLocale: Locale;
  availableLocales?: Locale[];
  developerSignature: string;
}

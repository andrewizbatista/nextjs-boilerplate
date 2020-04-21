interface AppConfig {
  /**
   * Name of the app (used in the meta tags).
   */
  APP_NAME: string;
  /**
   * Description of the app (used in the meta tags).
   */
  APP_DESCRIPTION: string;
  /**
   * Domain of the app (used in the meta tags).
   */
  APP_DOMAIN: string;
  /**
   * Main theme color (used in the meta tags).
   */
  THEME_COLOR: string;
  /**
   * List of all the app locales.
   */
  LOCALES: Locale[];
  /**
   * Main api url.
   */
  API_URL?: string;
  /**
   * List of all the google fonts used.
   */
  GOOGLE_FONTS: string[];
  /**
   * Custom developer signature (used in the meta tags).
   */
  DEV_SIGNATURE?: string;
}

interface Locale {
  /**
   * Code of the language: (eg: "en")
   */
  CODE: string;
  /**
   * Region code of the language: (eg: "en_GB")
   */
  CODE_REGION: string;
  /**
   * Name of the language: (eg: "English")
   */
  NAME: string;
}

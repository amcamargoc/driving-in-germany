export enum LanguageCode {
  AR = 'ar',  // Arabic
  DE = 'de',  // German
  EN = 'en',  // English
  ES = 'es',  // Spanish
  FR = 'fr',  // French
  GR = 'gr',  // Greek
  HR = 'hr',  // Croatian
  IT = 'it',  // Italian
  PL = 'pl',  // Polish
  PT = 'pt',  // Portuguese
  RO = 'ro',  // Romanian
  RU = 'ru',  // Russian
  TR = 'tr',  // Turkish
}

export interface ILanguages {
  [LanguageCode.DE]: string;
  [LanguageCode.AR]: string;
  [LanguageCode.EN]: string;
  [LanguageCode.ES]: string;
  [LanguageCode.FR]: string;
  [LanguageCode.GR]: string;
  [LanguageCode.HR]: string;
  [LanguageCode.IT]: string;
  [LanguageCode.PL]: string;
  [LanguageCode.PT]: string;
  [LanguageCode.RO]: string;
  [LanguageCode.RU]: string;
  [LanguageCode.TR]: string;
}

export const ILanguagesUI = {
  [LanguageCode.DE]: {
    code: LanguageCode.DE,
    emoji: '🇩🇪',
    textEn: 'German'
  },
  [LanguageCode.AR]: {
    code: LanguageCode.AR,
    emoji: '🇦🇪',
    textEn: 'Arabic'
  },
  [LanguageCode.EN]: {
    code: LanguageCode.EN,
    emoji: '🇬🇧',
    textEn: 'English'
  },
  [LanguageCode.ES]: {
    code: LanguageCode.ES,
    emoji: '🇪🇸',
    textEn: 'Spanish'
  },
  [LanguageCode.FR]: {
    code: LanguageCode.FR,
    emoji: '🇫🇷',
    textEn: 'French'
  },
  [LanguageCode.GR]: {
    code: LanguageCode.GR,
    emoji: '🇬🇷',
    textEn: 'Greek'
  },
  [LanguageCode.HR]: {
    code: LanguageCode.HR,
    emoji: '🇭🇷',
    textEn: 'Croatian'
  },
  [LanguageCode.IT]: {
    code: LanguageCode.IT,
    emoji: '🇮🇹',
    textEn: 'Italian'
  },
  [LanguageCode.PL]: {
    code: LanguageCode.PL,
    emoji: '🇵🇱',
    textEn: 'Polish'
  },
  [LanguageCode.PT]: {
    code: LanguageCode.PT,
    emoji: '🇵🇹',
    textEn: 'Portuguese'
  },
  [LanguageCode.RO]: {
    code: LanguageCode.RO,
    emoji: '🇷🇴',
    textEn: 'Romanian'
  },
  [LanguageCode.RU]: {
    code: LanguageCode.RU,
    emoji: '🇷🇺',
    textEn: 'Russian'
  },
  [LanguageCode.TR]: {
    code: LanguageCode.TR,
    emoji: '🇹🇷',
    textEn: 'Turkish'
  }
}

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
    text: 'German'
  },
  [LanguageCode.AR]: {
    code: LanguageCode.AR,
    emoji: '🇦🇪',
    text: 'Arabic'
  },
  [LanguageCode.EN]: {
    code: LanguageCode.EN,
    emoji: '🇬🇧',
    text: 'English'
  },
  [LanguageCode.ES]: {
    code: LanguageCode.ES,
    emoji: '🇪🇸',
    text: 'Spanish'
  },
  [LanguageCode.FR]: {
    code: LanguageCode.FR,
    emoji: '🇫🇷',
    text: 'French'
  },
  [LanguageCode.GR]: {
    code: LanguageCode.GR,
    emoji: '🇬🇷',
    text: 'Greek'
  },
  [LanguageCode.HR]: {
    code: LanguageCode.HR,
    emoji: '🇭🇷',
    text: 'Croatian'
  },
  [LanguageCode.IT]: {
    code: LanguageCode.IT,
    emoji: '🇮🇹',
    text: 'Italian'
  },
  [LanguageCode.PL]: {
    code: LanguageCode.PL,
    emoji: '🇵🇱',
    text: 'Polish'
  },
  [LanguageCode.PT]: {
    code: LanguageCode.PT,
    emoji: '🇵🇹',
    text: 'Portuguese'
  },
  [LanguageCode.RO]: {
    code: LanguageCode.RO,
    emoji: '🇷🇴',
    text: 'Romanian'
  },
  [LanguageCode.RU]: {
    code: LanguageCode.RU,
    emoji: '🇷🇺',
    text: 'Russian'
  },
  [LanguageCode.TR]: {
    code: LanguageCode.TR,
    emoji: '🇹🇷',
    text: 'Turkish'
  }
}

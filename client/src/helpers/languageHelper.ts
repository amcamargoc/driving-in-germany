interface Translations {
  [key: string]: string;
}

export const getTextForLanguage = (translations: Translations, language: string): string => {
  // Check if the translation exists for the given language
  if (translations && translations[language]) {
    return translations[language];
  }

  // Fallback to English if the language is not found
  return translations?.en || "Translation not available";
};
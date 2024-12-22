import { ILanguages, LanguageCode } from "../interfaces/ILanguages";


export const getTextForLanguage = (text: ILanguages | undefined, language: LanguageCode): string => {
  // Check if the translation exists for the given language
  if (text && text[language]) {
    return text[language];

  } else {
    // Fallback to English if the language is not found
    return text?.en || "Translation not available";
  }
};
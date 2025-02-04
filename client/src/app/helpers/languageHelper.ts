import { ILanguages, LanguageCode } from "../interfaces/ILanguages";


export const getTextForLanguage = (text: ILanguages | undefined, language: string): string => {
  if(!Object.values(LanguageCode).includes(language as LanguageCode)) {
    language = LanguageCode.EN
  }

  if (text && text[language as LanguageCode]) {
    return text[language as LanguageCode];
  } else {
    return text?.en || "Translation not available";
  }
};
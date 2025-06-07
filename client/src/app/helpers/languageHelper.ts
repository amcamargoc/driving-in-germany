import { ILanguages, LanguageCode } from "../interfaces/ILanguages";


export const getTextForLanguage = (text: ILanguages | string, language: string): string => {

  if(!Object.values(LanguageCode).includes(language as LanguageCode)) {
    language = LanguageCode.EN
  }

  if (text && text[language]) {
    return text[language as LanguageCode];
  } else {
    return text?.en || "Translation not available";
  }
};
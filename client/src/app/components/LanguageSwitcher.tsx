"use client"

import { useSearchParams, useRouter } from "next/navigation";

import { LanguageCode, ILanguagesUI } from '../interfaces/ILanguages';

const LanguageSwitcher = () => {
  const QUERY_NAME = 'lang'
  const DEFAULT_lANGUAGE = LanguageCode.EN
  const searchParams = useSearchParams();
  const router = useRouter();

  const getCurrentLang = ()  =>{
    const params = new URLSearchParams(searchParams);
    const availableLanguages = Object.values(LanguageCode)
    let language = params.get(QUERY_NAME) || DEFAULT_lANGUAGE

    if(!availableLanguages.includes(language as LanguageCode)) {
      language = DEFAULT_lANGUAGE
    }

    return language;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement >) => {
    const selected = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set(QUERY_NAME, selected);
    router.push(`?${newParams.toString()}`);
  }

  return (
    <div className="h-min">
      <select
        value={getCurrentLang()}
        onChange={ (e) => handleChange(e) }
        className="text-sm rounded-md bg-white focus:outline-none focus:ring-2"
      >
        {Object.values(LanguageCode).map((lang) => (
          <option key={lang} value={lang}>
            { `${ILanguagesUI[lang].emoji} ${ILanguagesUI[lang].text}` }
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

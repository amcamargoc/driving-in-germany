"use client"

import { useSearchParams, useRouter } from "next/navigation";

import { LanguageCode, ILanguagesUI } from '../interfaces/ILanguages';

interface LanguageSwitcherProps {
  language: string
}

const LanguageSwitcher = ({ language } : LanguageSwitcherProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement >) => {
    const selected = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("lang", selected);
    router.push(`?${newParams.toString()}`);
  }

  if(!Object.values(LanguageCode).includes(language as LanguageCode)) {
    language = LanguageCode.EN
  }

  return (
    <select
      value={language || LanguageCode.EN}
      onChange={ (e) => handleChange(e) }
      className="px-3 py-2 text-sm rounded-md bg-[#D9DFC6] focus:outline-none focus:ring-2 focus:ring-[#FFF2C2]"
    >
      {Object.values(LanguageCode).map((lang) => (
        <option key={lang} value={lang}>
          { `${ILanguagesUI[lang].emoji} ${ILanguagesUI[lang].textEn}` }
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
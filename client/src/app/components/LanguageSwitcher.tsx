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
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Select Language</h2>
      <select
        value={language || LanguageCode.EN}
        onChange={ (e) => handleChange(e) }
        className="w-full p-2 border-2 border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        {Object.values(LanguageCode).map((lang) => (
          <option key={lang} value={lang}>
            { `${ILanguagesUI[lang].emoji} ${ILanguagesUI[lang].textEn}` }
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
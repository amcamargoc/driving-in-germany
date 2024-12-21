
import { LanguageCode, ILanguagesUI } from '../interfaces/ILanguages';

const LanguageSwitcher = ({ language, setLanguage }: { language: LanguageCode; setLanguage: (lang: any) => void }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Select Language</h2>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
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
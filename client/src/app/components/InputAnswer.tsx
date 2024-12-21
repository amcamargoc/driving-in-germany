import React from 'react';
import { getTextForLanguage } from '@/app/helpers/languageHelper';

interface InputAnswerProps {
  answer: {
    label1: { [key: string]: string };
    label3: { [key: string]: string };
    categories: string[];
    country: string;
    kind: string;
    answer: string;
  };
  language: string;
}

const InputAnswer: React.FC<InputAnswerProps> = ({ answer, language }) => {
  const { label1, label3, categories, country, kind, answer: answerText } = answer;

  return (
    <div className="mb-4">
      <label htmlFor="inputAnswer" className="block text-sm font-medium text-gray-700">
        {getTextForLanguage(label1, language)}
      </label>
      <input
        type="text"
        id="inputAnswer"
        placeholder={getTextForLanguage(label3, language)}
        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-xs text-gray-500 mt-1">
        Categories: {categories.join(', ')} | Country: {country}
      </p>
    </div>
  );
};

export default InputAnswer;
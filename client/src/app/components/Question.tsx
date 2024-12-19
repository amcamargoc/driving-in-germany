import React from 'react';
import { getTextForLanguage } from '@/helpers/languageHelper';

interface QuestionProps {
  question: {
    text: { [key: string]: string };
    subtext?: { [key: string]: string };
  };
  language: string;
}

const Question: React.FC<QuestionProps> = ({ question, language }) => {
  const { text, subtext } = question;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">{getTextForLanguage(text, language)}</h2>
      {subtext && <p className="text-md text-gray-500">{getTextForLanguage(subtext, language)}</p>}
    </div>
  );
};

export default Question;
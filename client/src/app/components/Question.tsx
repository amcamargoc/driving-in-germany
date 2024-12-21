import React from 'react';
import { getTextForLanguage } from '@/app/helpers/languageHelper';

import { IQuestion } from './../interfaces/IQuestion'
import { LanguageCode } from '../interfaces/ILanguages';


interface QuestionProps {
  question: IQuestion;
  language: LanguageCode;
}

const Question: React.FC<QuestionProps> = ({ question, language }) => {

  return (
    <li key={question._id} className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition duration-200 ease-in-out">
        <p className="text-lg font-medium text-gray-800">{getTextForLanguage(question.text, language)}</p>
    </li>
  );
};

export default Question;
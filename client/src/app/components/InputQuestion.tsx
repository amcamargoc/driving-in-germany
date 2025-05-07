import React from 'react';

import { getTextForLanguage } from '@/app/helpers/languageHelper';

import { IAnswers } from '../interfaces/IAnswers';
import { IQuestion } from '../interfaces/IQuestion';

interface InputQuestionProps {
  answerOptions: IAnswers
  question: IQuestion
  language: string
}

const InputQuestion = ({ answerOptions, question, language } : InputQuestionProps) => {
  return (
    <div className="mb-4">
      <p>{ getTextForLanguage(question.text, language) }</p>

      <label htmlFor="inputAnswer" className="block text-sm font-medium text-gray-700">
        {getTextForLanguage(answerOptions.label1, language)}
      </label>
      <input
        type="text"
        id="inputAnswer"
        placeholder={getTextForLanguage(answerOptions.label3, language)}
        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* <button onClick={checkAnswer} ></button> */}
    </div>
  );
};

export default InputQuestion;
import React from 'react';
import { getTextForLanguage } from '@/app/helpers/languageHelper';

import { IAnswers } from '../interfaces/IAnswers';
import { useQuestionContext } from '../context/QuestionContext';

interface InputAnswerProps {
  answer: IAnswers
}

const InputAnswer: React.FC<InputAnswerProps> = ({ answer }) => {
  const { language } = useQuestionContext();

  return (
    <div className="mb-4">
      <label htmlFor="inputAnswer" className="block text-sm font-medium text-gray-700">
        {getTextForLanguage(answer?.label1, language)}
      </label>
      <input
        type="text"
        id="inputAnswer"
        placeholder={getTextForLanguage(answer?.label3, language)}
        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputAnswer;
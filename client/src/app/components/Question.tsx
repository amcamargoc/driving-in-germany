import React from 'react';
import Link from 'next/link';

import { getTextForLanguage } from '@/app/helpers/languageHelper';

import { IQuestionData } from '../interfaces/IQuestionData';

interface QuestionProps {
  questionData: IQuestionData,
  language: string
}

const Question: React.FC<QuestionProps> = ({ questionData, language }) => {
  const questionId = questionData.question._id
  const QUESTION_PATH = `questions/${questionId}`

  return (
    <Link
      href={{ pathname: QUESTION_PATH }}
      key={questionId}
    >
      <li className='text-gray-900 divide-gray-200 dark:text-white dark:divide-gray-700 cursor-pointer '>
        <div className="flex flex-col pb-3">
          <p className="text-lg font-medium text-gray-900">
            {getTextForLanguage(questionData.question.text, language)}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default Question;
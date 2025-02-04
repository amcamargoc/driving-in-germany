import React from 'react';
import Link from 'next/link';

import { IQuestionData } from '../interfaces/IQuestionData';

import { getTextForLanguage } from '@/app/helpers/languageHelper';

interface QuizProps {
  questions: Array<IQuestionData>;
  language: string;
  params: object
}

const renderQuestion = (payload: IQuestionData, language: string, params: object) => {
  const questionId = payload.question._id
  const QUESTION_PATH = `questions/${questionId}`

  return (
    <Link href={{ pathname: QUESTION_PATH , query: { ...params }}} scroll={true} key={questionId} >
      <li className='m-2 p-3 bg-[#FFFDF0] rounded-sm shadow-md b-b-2 text-base text-gray-700'>
        { getTextForLanguage(payload.question.text, language) }
      </li>
    </Link>
  );
};

const Quiz: React.FC<QuizProps> = ({ questions, language, params }) => {
  return (
    <ul role="list" className='space-y-2'> {
        questions?.map((question) =>  {
          return renderQuestion(question, language, params)
        })
      }
    </ul>
  );
};

export default Quiz;



// return <Question key={question.question._id} questionData={question} language={language}/>
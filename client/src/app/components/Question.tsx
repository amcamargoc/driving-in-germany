import React from 'react';
import { useRouter } from 'next/navigation'

import { getTextForLanguage } from '@/app/helpers/languageHelper';

import { useQuestionContext } from '../context/QuestionContext';
import { IQuestionData } from '../interfaces/IQuestionData';


interface QuestionProps {
  questionData: IQuestionData
}

const PATH = 'questions/'

const Question: React.FC<QuestionProps> = ({ questionData }) => {
  const router = useRouter()
  const { setSelectedQuestion, language } = useQuestionContext();
  const questionId = questionData.question._id

  const handleClick = () => {
    setSelectedQuestion(questionData);

    router.push(`${PATH}/${questionId}`)
  };

  return (
    <li key={questionId}  onClick={handleClick} className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition duration-200 ease-in-out">
      <p className="text-lg font-medium text-gray-800">{getTextForLanguage(questionData.question.text, language)}</p>
    </li>
  );
};

export default Question;
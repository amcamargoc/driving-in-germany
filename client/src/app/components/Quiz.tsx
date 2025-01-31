import React from 'react';

import Question from './Question';

import { IQuestionData } from '../interfaces/IQuestionData';

interface QuizProps {
  questions: Array<IQuestionData>;
  language: string
}

const Quiz: React.FC<QuizProps> = ({ questions, language }) => {
  return (
    <ul role="list">
      {
        questions?.map((question) =>  {
          return <Question key={question.question._id} questionData={question} language={language}/>
        })
      }
    </ul>
  );
};

export default Quiz;
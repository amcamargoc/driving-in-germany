import React from 'react';
import Question from './Question';

import { IQuestionData } from '../interfaces/IQuestionData';


interface QuizProps {
  questions: Array<IQuestionData | any>;
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {

  return (
    <ul className="space-y-4">
    {
      questions.map((question) =>  {
        return <Question key={question.question._id} questionData={question} />
      })
    }
    </ul>
  );
};

export default Quiz;
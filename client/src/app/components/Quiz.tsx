import React from 'react';
import Question from './Question';
import InputAnswer  from './inputAnswer';
import MultichoiceAnswer from './multichoiceAnswer';
import { getTextForLanguage } from '../helpers/languageHelper';

interface Option {
  correct: boolean;
  name: string;
  text: { [key: string]: string };
}

interface Answer {
  kind: string;
  label1: { [key: string]: string };
  label3: { [key: string]: string };
  categories: string[];
  country: string;
  answer: string;
  options?: Option[];
  comment: { [key: string]: string };
  video?: string;
  videoThumbStart?: string;
  videoThumbEnd?: string;
}

interface IQuestion {
  text: { [key: string]: string };
  subtext?: { [key: string]: string };
}

interface IQuizData {
  question: IQuestion;
  answers: Answer[];
}

interface QuizProps {
  data: IQuizData;
  language: string;
}

const Quiz: React.FC<QuizProps> = ({ data, language }) => {
  const { question, answers } = data;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <Question question={question} language={language} />

      <div className="space-y-6">
        {answers.map((answer, index) => {
          if (answer.kind === 'input') {
            return <InputAnswer key={index} answer={answer} language={language} />;
          } else if (answer.kind === 'multichoice') {
            return <MultichoiceAnswer key={index} answer={answer} language={language} />;
          }
          return null; // In case of unsupported answer kind
        })}
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-500">{getTextForLanguage(question.subtext || {}, language)}</p>
      </div>
    </div>
  );
};

export default Quiz;
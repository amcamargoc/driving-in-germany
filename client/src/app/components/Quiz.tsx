import React from 'react';
import Question from './Question';
// import InputAns wer  from './inputAnswer';
// import MultichoiceAnswer from './multichoiceAnswer';

// import { getTextForLanguage } from '../helpers/languageHelper';

import { IQuestion } from './../interfaces/IQuestion'
import { IAnswers } from './../interfaces/IAnswers'
import { LanguageCode } from '../interfaces/ILanguages';

interface IQuestionData {
  question: IQuestion;
  answers: Array<IAnswers>;
}

interface QuizProps {
  data: Array<IQuestionData>;
  language: LanguageCode;
}

const Quiz: React.FC<QuizProps> = ({ data, language }) => {

  return (
    <ul className="space-y-4">


        {
          data.map((data) =>  {
            return <Question key={data.question._id} question={data.question} language={language} />



              {/* NEXT ITERATION */}


              {/* <div className="mt-6">
                <p className="text-sm text-gray-500">{getTextForLanguage(question.subtext || {}, language)}</p>
              </div>
              data.answers.map((answer) => {
              if (answer.kind == InputType ) {
                return <InputAnswer key={index} answer={answer} language={language} />;
              } else if (answer.kind === MultichoiceType) {
                return <MultichoiceAnswer key={index} answer={answer} language={language} />;
              } else {
                console.log('unsopported')
                return null; // In case of unsupported answer kind
              }})


              */}

          })
        }



    </ul>
  );
};

export default Quiz;
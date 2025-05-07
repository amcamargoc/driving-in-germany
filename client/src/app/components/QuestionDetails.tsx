// import MultipleChoiceTypeQuestion from './MultipleChoiceTypeQuestion';
import InputQuestion from './InputQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import { InputType, MultipleChoiceType } from '../interfaces/IAnswers';
import { IQuestionData } from '../interfaces/IQuestionData';


interface QuestionDetailsProps {
  questionData: IQuestionData
  language: string
}

const QuestionDetails = ({ questionData, language }: QuestionDetailsProps) => {
  // [NOTE] data check - sometimes root key has all the values others it comes inside 'data' key
  // { question:, answers: { data: { ...object } } } || { question: , answers: { ...object } }
  // TODO: improve data sourcing in backend?
  const answers = questionData.answers?.data || questionData.answers

  if (answers.kind === InputType ) {
    return <InputQuestion
              key={questionData.question._id}
              answerOptions={answers}
              question={questionData.question}
              language={language}
            />;

  } else if (answers.kind === MultipleChoiceType) {
    return <MultipleChoiceQuestion
              key={questionData.question._id}
              answerOptions={answers}
              question={questionData.question}
              language={language} />
  } else {
    return null; // In case of unsupported answer kind
  }
};

export default QuestionDetails;
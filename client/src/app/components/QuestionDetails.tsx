import { useRouter } from 'next/navigation';
import { useQuestionContext } from '../context/QuestionContext';
import { getTextForLanguage } from '@/app/helpers/languageHelper';
import MultichoiceAnswer from './MultichoiceAnswer';
import InputAnswer from './InputAnswer';
import { IAnswers, InputType, MultichoiceType } from '../interfaces/IAnswers';

const renderAnswerOptions = (answers: IAnswers) => {

  if (answers.kind == InputType ) {
    return <InputAnswer key={answers._id} answer={answers} />;
  } else if (answers.kind === MultichoiceType) {
    return <MultichoiceAnswer key={answers._id} answer={answers}  />;
  } else {
    console.log('unsopported')
    return null; // In case of unsupported answer kind
  }
}

const QuestionDetails: React.FC = () => {
  const { selectedQuestion, language } = useQuestionContext();
  const router = useRouter();

  if (!selectedQuestion) {
    // Redirect or show an error if there's no selected question
    // router.push('/');
    return <p>NOT FOUND</p>;
  }
  console.log(selectedQuestion)

  return (
    <div className="p-6">
      { getTextForLanguage(selectedQuestion.question.text, language) }
      { renderAnswerOptions(selectedQuestion.answers) }


      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Back
      </button>
    </div>
  );
};

export default QuestionDetails;
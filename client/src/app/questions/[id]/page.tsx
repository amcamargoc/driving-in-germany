"use client"
import { useRouter } from 'next/navigation';

import { useQuestionContext } from './../../context/QuestionContext';

import { IQuestion } from './../../interfaces/IQuestion'
import { LanguageCode } from './../../interfaces/ILanguages';

import LanguageSwitcher from './../../components/LanguageSwitcher';
import QuestionDetails from '@/app/components/QuestionDetails';



// handle question url

interface QuestionDetailsProps{
  question: IQuestion;
  language: LanguageCode;
}

const Page: React.FC<QuestionDetailsProps> = ({ }) => {
  const router = useRouter();
    const { language, setLanguage} = useQuestionContext();

  return (
    <div className="p-6">
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      <QuestionDetails/>

      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Back
      </button>
    </div>
  );
};

export default Page;
// import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { getRecord } from '../../../../lib/redis_client';

import { ISearchParams } from '../../interfaces/ISearchParams';
import { IQuestionData } from '@/app/interfaces/IQuestionData';


import LanguageSwitcher from '@/app/components/LanguageSwitcher';
import QuestionDetails from '@/app/components/QuestionDetails';
import Link from 'next/link';

interface pageProps {
  params: { id: string },
  searchParams: ISearchParams
}

export default async function Page ({ params, searchParams } : pageProps) {
  const queryParams = await searchParams;
  const questionId = (await params)?.id
  const lang = String(queryParams?.lang) || "en"
  const QUESTIONS_PATH = '/'
  const questionPayload : IQuestionData = (await getRecord(questionId) || {}) as IQuestionData

  return (
    <div className="p-6">
      <LanguageSwitcher language={lang} />

      <QuestionDetails questionData={questionPayload} language={lang} />

      <Link href={{ pathname: QUESTIONS_PATH, query: { ...queryParams } }} >
        <li className='m-2 p-3 bg-[#FFFDF0] rounded-sm shadow-md b-b-2 text-base text-gray-700'>
          Back
        </li>
      </Link>
    </div>
  );
};
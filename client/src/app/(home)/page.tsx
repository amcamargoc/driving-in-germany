import React from 'react'


import { IQuestion } from '../interfaces/IQuestion'
import { ISearchParams } from '../interfaces/ISearchParams'

import { getQuestions } from '@/../lib/database_client'

import Pagination from '@/app/components/Pagination'
import QuestionList from '@/app/components/QuestionList'
import { IQuestionsPayload } from '../interfaces/IQuestionsPayload'


interface pageProps {
  searchParams: ISearchParams
}

export default async function Page({ searchParams } : pageProps ) {
  // const res = await fetch('http://localhost:3000/api/questions');
  // const data = await res.json();
  // console.log(data);

  const params = await searchParams;
  const lang = String(params?.lang) || "en"


  const response : IQuestionsPayload = await getQuestions({ page: parseInt(params?.page || '1', 10)})
  const questions : Array<IQuestion> =  response.data || []
  const totalPages = response.metadata.totalPages

  console.log(questions)


  return (
    <div className="min-h-screen flex flex-col">
      {/* <div className="min-h-screen w-full flex items-center justify-center py-8"> */}
      <div className="flex-1 p-1 sm:p-2 lg:p-2">
        <div className="w-full p-1 space-y-6"> {/* Adds consistent vertical spacing */}
          <div className="min-h-screen">
            <QuestionList questions={questions} language={lang} params={params}/>
          </div>

          <div className="sticky bottom-0 bg-white p-2">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
};

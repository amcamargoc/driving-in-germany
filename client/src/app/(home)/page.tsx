import React from 'react';

import { getRecords } from '../../../lib/redis_client';

import { IQuestionData } from '../interfaces/IQuestionData';
import { ISearchParams } from '../interfaces/ISearchParams';

import Pagination from '@/app/components/Pagination';
import QuestionList from '@/app/components/QuestionList';


interface MetaData {
  total: number,
  pages: number
}

interface pageProps {
  searchParams: ISearchParams
}

export default async function Page({ searchParams } : pageProps ) {
  let payload : IQuestionData[] = []
  let metadata : MetaData = { total: 0, pages: 0 }

  const params = await searchParams;
  const queryPage = Number(params?.page) || 1;
  const lang = String(params?.lang) || "en"

  try {
    const response = await getRecords(queryPage) || { payload, metadata }

    payload = response.payload
    metadata = response.metadata
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* <div className="min-h-screen w-full flex items-center justify-center py-8"> */}
      <div className="flex-1 p-1 sm:p-2 lg:p-2">
        <div className="w-full p-1 space-y-6"> {/* Adds consistent vertical spacing */}
          <div className="min-h-screen">
            <QuestionList questions={payload} language={lang} params={params}/>
          </div>

          <div className="sticky bottom-0 bg-white p-2">
            <Pagination totalPages={metadata.pages} />
          </div>
        </div>
      </div>
    </div>
  );
};

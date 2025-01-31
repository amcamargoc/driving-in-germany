import React from 'react';

import { getRecords } from '../../../lib/redis_client';

import { IQuestionData } from '../interfaces/IQuestionData';

import Pagination from '@/app/components/Pagination';
import Quiz from '@/app/components/Quiz';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';

interface PageProps {
  searchParams: {
    lang?: string;
    page?: string;
  }
}

interface MetaData {
  total: number,
  pages: number
}

export default async function Page({ searchParams } : PageProps ) {
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
    <div className='w-max'>
      <LanguageSwitcher language={lang} />
      <Quiz questions={payload} language={lang} />
      <Pagination totalPages={metadata.pages}/>
    </div>
  );
};
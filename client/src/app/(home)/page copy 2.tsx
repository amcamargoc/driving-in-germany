import React from 'react';

import { getRecords } from '../../../lib/redis_client';

import { IQuestionData } from '../interfaces/IQuestionData';

import Pagination from '@/app/components/Pagination';
import QuestionList from '@/app/components/QuestionList';
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
    <div className="w-full min-h-screen flex items-center justify-center bg-[#EFF3EA] p-4">
      <div className="w-full max-w-2xl mx-auto p-6 text-center bg-white shadow-lg rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">German theory test - Theoretische Führerscheinprüfung B </h1>
          <LanguageSwitcher language={lang} />
        </div>

        <QuestionList questions={payload} language={lang} />
        <Pagination totalPages={metadata.pages}/>
      </div>
    </div>
  );
};
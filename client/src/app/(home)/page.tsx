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
    <div className="min-h-screen bg-[#EFF3EA]">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto p-6 bg-white">
          <div className="h-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-gray-800 text-center sm:text-left">
              German theory test - Theoretische Führerscheinprüfung B
            </h1>

            <div className="mt-4 sm:mt-0">
              <LanguageSwitcher language={lang} />
            </div>
          </div>

          <QuestionList questions={payload} language={lang} />

          <Pagination totalPages={metadata.pages} />
        </div>
      </div>
    </div>
  );
};
"use client"

import React from 'react';
import { useQuestionContext } from '../context/QuestionContext';


import Quiz from '@/app/components/Quiz';
import LanguageSwitcher from '../components/LanguageSwitcher';
import dataSample from '@/app/utils/data.json'

export default function Page() {
  const { language, setLanguage} = useQuestionContext();

  return (
    <div className="md:container md:mx-auto">
      <Quiz questions={dataSample}  />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
};
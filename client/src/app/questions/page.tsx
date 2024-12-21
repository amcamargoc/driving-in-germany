"use client"

import React, { useState } from 'react';

import { LanguageCode } from '../interfaces/ILanguages';

import Quiz from '@/app/components/Quiz';
import LanguageSwitcher from '../components/LanguageSwitcher';
import dataSample from '@/app/utils/data.json'


export default function Page() {
  const [language, setLanguage] = useState<string>(LanguageCode.EN); // Default language is English


  return (
    <div className="md:container md:mx-auto">
      <Quiz data={dataSample} language={language} />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
};
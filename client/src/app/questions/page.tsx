// App.tsx

import React, { useState } from 'react';
import Quiz from '@/app/components/Quiz';
import dataSample from '@/app/utils/data.json'
export default function Home() {

  const [language, setLanguage] = useState<string>("en"); // Default language is English
  console.log(dataSample)
  

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <Quiz data={dataSample} language={language} />
      <button onClick={() => setLanguage("de")} className="mt-4 text-blue-500">Change Language to German</button>
    </div>
  );
};
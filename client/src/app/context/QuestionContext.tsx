"use client"

import React, { createContext, useContext, useState } from 'react';
import { IQuestionData } from '../interfaces/IQuestionData';
import { LanguageCode } from '../interfaces/ILanguages';


interface QuestionContextType {
  selectedQuestion: IQuestionData | null;
  setSelectedQuestion: (question: IQuestionData | null) => void;
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export const QuestionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestionData | null>(null);
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN); // Default language is English

  return (
    <QuestionContext.Provider value={{ selectedQuestion, setSelectedQuestion, language, setLanguage}}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestionContext must be used within a QuestionProvider');
  }
  return context;
};
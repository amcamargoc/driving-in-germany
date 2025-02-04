import React from 'react';

import { getTextForLanguage } from '../helpers/languageHelper';

import { IAnswers } from '../interfaces/IAnswers';
import { IQuestion } from '../interfaces/IQuestion';

interface MultipleChoiceQuestionProps {
  answerOptions: IAnswers
  question: IQuestion
  language: string
}

const MultipleChoiceQuestion = ({ answerOptions, question, language } : MultipleChoiceQuestionProps) => {
  const { options, comment, video, videoThumbStart, videoThumbEnd } = answer;

  return (
    <div className="mb-6">
      {video && (
        <div className="mb-4">
          <video controls className="w-full h-64 object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {videoThumbStart && videoThumbEnd && (
            <div className="flex justify-between mt-2">
              <img
                src={videoThumbStart}
                alt="Video Start"
                className="w-1/4 rounded-md"
              />
              <img
                src={videoThumbEnd}
                alt="Video End"
                className="w-1/4 rounded-md"
              />
            </div>
          )}
        </div>
      )}

      <div className="text-sm text-gray-600 mb-2">{getTextForLanguage(comment, language)}</div>

      {options.map((option, index) => (
        <div key={index} className="mb-2 flex items-center">
          <input
            type="radio"
            id={option.name}
            name="answer"
            value={option.name}
            className="h-4 w-4 text-blue-500 focus:ring-blue-500"
          />
          <label htmlFor={option.name} className="ml-2">
            <span className="font-medium">{option.name}</span> {getTextForLanguage(option.text, language)}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
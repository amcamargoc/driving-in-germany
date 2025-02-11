import React from 'react';

import { getTextForLanguage } from '../helpers/languageHelper';

import { IAnswers } from '../interfaces/IAnswers';
import { IQuestion } from '../interfaces/IQuestion';
import Image from 'next/image'
import { Suspense } from 'react'

interface MultipleChoiceQuestionProps {
  answerOptions: IAnswers
  question: IQuestion
  language: string
}


const renderVideo = ( videoUrl: string | undefined,
                      videoThumbStartUrl: string | undefined,
                      videoThumbEndUrl: string | undefined ) => {
  if (!videoUrl) { return }

  return (
    <Suspense fallback={renderImage(videoThumbStartUrl || videoThumbEndUrl)}>
      <video autoPlay loop playsInline muted controls preload="none" aria-label="Video player">
        <source src={videoUrl} type="video/mp4" />

        Your browser does not support the video tag
      </video>
    </Suspense>
  )
}


const renderImage = (imageUrl: string | undefined) => {
  if (!imageUrl) { return }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        // loader={imageLoader}
        alt="driving in germany" // todo: improve CEO
        src={imageUrl}
        width={80}
        height={80}
        // placeholder="blur"
        // style={{
        //   width: '100%',
        //   height: 'auto',
        // }}
      />
    </div>
  )
}

const renderMedia = ( imageUrl: string | undefined,
                      videoUrl: string | undefined,
                      videoThumbStartUrl: string | undefined,
                      videoThumbEndUrl: string | undefined ) => {

  if(imageUrl) {
    return renderImage(imageUrl)
  } else if (videoUrl) {
    return renderVideo(videoUrl, videoThumbEndUrl, videoThumbStartUrl)
  }
}

const MultipleChoiceQuestion = ({ answerOptions, question, language } : MultipleChoiceQuestionProps) => {
  const { options, comment, video, videoThumbStart, videoThumbEnd, image, subtext } = answerOptions;

  return (
    <div>
      <div>{ getTextForLanguage(question.text, language) }</div>

      <div>{ subtext &&  getTextForLanguage(subtext, language) }</div>

      { renderMedia(image, video, videoThumbStart, videoThumbEnd) }

      {
        options.map((option, index) => {
          return (
            <div key={index} className="mb-2 flex items-center">
              <input
                type="radio"
                multiple={true}
                id={option.name}
                name="answer"
                value={option.name}
                className="h-4 w-4 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor={option.name} className="ml-2">
                { getTextForLanguage(option.text, language) }
              </label>
            </div>
          )
        })
      }

      <div>{ comment &&  getTextForLanguage(comment, language) }</div>
    </div>
  );
};

export default MultipleChoiceQuestion;
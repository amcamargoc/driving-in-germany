import { ILanguages } from "./ILanguages";

interface Option {
  correct: boolean;
  name: string;
  text: ILanguages;
}

export const InputType = 'input' as const;
export const MultipleChoiceType = 'multichoice' as const;
export type AnswerKind =  typeof InputType | typeof MultipleChoiceType;

// Different kind of layouts for multichoice question type
// 1) full text. with ?subtext
// 2) image
// 3) video (thumb start and end)

// 4) Input. using labels but could have image

interface IAnswer {
  _id: string;
  options: Option[];
  kind: AnswerKind;
  //  Question/answer layout
  subtext?: ILanguages;
  label1?: ILanguages;
  label3?: ILanguages;
  video?: string;
  videoThumbEnd?: string;
  videoThumbStart?: string;
  image?: string

  categories: string[];
  country: string;
  name: string;
  number: string;
  text: ILanguages;
  points: number;
  type: string;
  version: string;
  schema: string;
  meta?: {
    amtlich: string;
    annex: string;
  };
  createdAt: number;
  worldIds: string[];
  comment: ILanguages;
  structures: string[]
  expireAt: number;
}

export interface IAnswers extends IAnswer{
  data?: IAnswer
}
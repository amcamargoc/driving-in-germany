import { ILanguages } from "./ILanguages";

interface Option {
  correct: boolean;
  name: string;
  text: ILanguages;
}

export type AnswerKind =  typeof InputType | typeof MultichoiceType;

export const InputType = 'input' as const;
export const MultichoiceType = 'multichoice' as const;

export interface IAnswers {
  _id: string;
  options: Option[];
  kind: AnswerKind;
  categories: string[];
  country: string;
  name: string;
  number: string;
  text: ILanguages;
  subtext: ILanguages;
  points: number;
  type: string;
  version: string;
  schema: string;
  meta: {
    amtlich: string;
    annex: string;
  };
  video?: string;
  videoThumbEnd?: string;
  videoThumbStart?: string;
  createdAt: number;
  worldIds: string[];
  comment: Comment;
  expireAt: number;
}
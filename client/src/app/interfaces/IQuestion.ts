import { ILanguages } from "./ILanguages"

interface WorldTransition {
  world: {
    _id: string;
    name: string;
    country: string;
  };
}

interface World {
  _id: string;
  title: ILanguages;
  icon: string;
  country: string;
  color: string;
  licenses: string[];
  type: string;
  name: string;
  orderingNumber: number;
  dataVersion: number;
  mediaSize: number;
  version: string;
  mediaUri: string;
  transitionFrom?: WorldTransition;
  createdAt: number;
  semanticId: string;
}

export interface IQuestion {
  valid: boolean;
  name: string;
  _id: string;
  text: ILanguages;
  categories: string[];
  number: string;
  type: string;
  points: number;
  attemptsCount: number;
  world: World;
}

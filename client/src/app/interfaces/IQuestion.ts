import { ILanguages } from "./ILanguages"


// interface WorldTransition {
//   world: {
//     _id: string;
//     name: string;
//     country: string;
//   };
// }

// interface World {
//   _id: string;
//   title: ILanguages;
//   icon: string;
//   country: string;
//   color: string;
//   licenses: string[];
//   type: string;
//   name: string;
//   orderingNumber: number;
//   dataVersion: number;
//   mediaSize: number;
//   version: string;
//   mediaUri: string;
//   transitionFrom?: WorldTransition;
//   createdAt: number;
//   semanticId: string;
// }

export interface IQuestion {
  id: number;
  raw_data: string;
  external_id: string;
  type: string;
  external_reference: string;
  multi_lang_title:  ILanguages | string;
  // valid: boolean;
  // name: string;
  theme: string;
  points: number;
  created_at: Date;
  updated_at: Date;
}

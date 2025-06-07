import { IMetadata } from "./IMetadata";
import { IQuestion } from "./IQuestion";

export interface IQuestionsPayload {
  data: Array<IQuestion>,
  metadata: IMetadata

}
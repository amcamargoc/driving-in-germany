export interface IQuestion {
  valid: boolean;
  name: string;
  _id: string;
  text: {
      de: string;
      ar: string;
      en: string;
      es: string;
      fr: string;
      gr: string;
      hr: string;
      it: string;
      pl: string;
      pt: string;
      ro: string;
      ru: string;
      tr: string;
  };
  categories: string[];
  number: string;
  type: string;
  points: number;
  attemptsCount: number;
  world: {
      _id: string;
      title: {
          de: string;
          gr: string;
          en: string;
          es: string;
          fr: string;
          hr: string;
          it: string;
          pl: string;
          pt: string;
          ro: string;
          ru: string;
          tr: string;
          ar: string;
      };
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
      transitionFrom?: {
          world: {
              _id: string;
              name: string;
              country: string;
          };
      };
      createdAt: number;
      semanticId: string;
  };
}

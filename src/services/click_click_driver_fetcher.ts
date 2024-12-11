import { HttpClient } from "../utils/http_client.ts"
import type { IQuestion } from '../interfaces/index.ts';

export class ClickCLickDriverFetcher {
  private BASE_URL = 'https://www.clickclickdrive.de/api/mobile/api/v1/theory/'
  private httpClient

  constructor(token: string) {
    this.httpClient = new HttpClient(this.BASE_URL, token)
  }

  fetchQuestions() {
    const QUESTIONS_PATH = 'questions/list'
    const payload = JSON.stringify({
      "filters": {
        "textFilter": {
          "lang": "en",
          "text": ""
        },
        "specialFilters": [],
        "licenses": [],
        "questionStatuses": [],
        "questionTypes": [],
        "worldIds": [],
        // "limit": 10,
        // "skip": 0
      }
    })

    console.log('fetching questions')
    return this.httpClient.post(QUESTIONS_PATH, payload).then(response => {
      const questionTotal =  response.data.total
      const questionFormatted = response.data.data

      console.log('metadata questions: ', questionTotal)
      const questions = questionFormatted.filter(item => item.valid === true);

      return questions;
    })
  }

  fetchAnswerOptions(questionId: string) {
    const ANSWER_OPTIONS_PATH = 'questions/'
    const payload = {}

    return this.httpClient.get(ANSWER_OPTIONS_PATH, payload).then(response => {
      return response.data;
    })
  }
}

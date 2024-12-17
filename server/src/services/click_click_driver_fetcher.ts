import { HttpClient } from "../utils/http_client.ts"
import type { IQuestion } from '../interfaces/index.ts';

export class ClickCLickDriverFetcher {
  private BASE_URL = 'https://www.clickclickdrive.de/api/mobile/api/v1/theory/'
  private httpClient

  constructor(token: string) {
    this.httpClient = new HttpClient(this.BASE_URL, token)
  }

  async fetchQuestions() {
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

    console.log('⌛️ Fetching questions...')
    return await this.httpClient.post(QUESTIONS_PATH, payload).then(response => {
      const questionTotal =  response.data.total
      const questionFormatted = response.data.data

      console.log(`✅ Questions fetched: ${questionTotal}`)
      return questionFormatted;
    })
  }

  async fetchAnswerOptions(questionId: string) {
    const ANSWER_OPTIONS_PATH = `questions/${questionId}`

    return await this.httpClient.get(ANSWER_OPTIONS_PATH).then(response => {
      return response.data.data;
    })
  }
}

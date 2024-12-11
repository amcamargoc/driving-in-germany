import { RedisClient } from './redis_client.ts';
import { ClickCLickDriverFetcher } from './click_click_driver_fetcher.ts';

import type { IQuestion } from '../interfaces/index.ts';

export class QuestionsManager {
  private fetcher: ClickCLickDriverFetcher;
  private redisClient: RedisClient

  constructor(token: string) {
    this.fetcher = new ClickCLickDriverFetcher(token)
    this.redisClient = new RedisClient()
  }

  async fetchAll() {
    return this.fetchAndStoreQuestions()
  }

  private async fetchAndStoreQuestions() {
    const questions = await this.fetcher.fetchQuestions()

    if(!questions) {
      console.log('error no answers')
    } else {
      questions.forEach(this.getAnswerOptions())
    }
  }

  private async getAnswerOptions() {
    return async (question: IQuestion) => {
      console.log('expanding question: ', question._id)
      const answerOptions =  this.fetcher.fetchAnswerOptions(question._id)

      console.log('fetched answers for question: ', question._id)
      await this.save(question, answerOptions)
    }
  }
  // TODO: Next iteration: use type as interface?
  // use text combination as key to make it easy to find
  private save(question: IQuestion, answerOptions: any) {
    const key = question._id
    const valuesMapped = {
      question: question,
      answers: answerOptions
    }

    this.redisClient.insert(key, valuesMapped)
    console.log('question saved with key', key)
  }
}

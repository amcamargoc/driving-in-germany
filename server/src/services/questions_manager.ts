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
    await this.redisClient.initialize()
    return await this.fetchAndStoreQuestions()
  }

  async storeAsJSON() {
    await this.redisClient.initialize()

    await this.redisClient.storeAsJSON()
  }

  private async fetchAndStoreQuestions() {
    const questions = await this.fetcher.fetchQuestions()

    if(!questions) {
      console.error('error no answers')
    } else {
      const total = questions.length
      let iterator = 1

      for(const question of questions) {
        console.info(`🧠 fetching ${iterator} out ${total} questions...`)
        await this.getAndSaveAnswerOptions(question)
        iterator++
      }
    }
  }

  private async getAndSaveAnswerOptions(question) {
    console.log(`⏳ expanding question: ${question._id}`)
    const answerOptions =  await this.fetcher.fetchAnswerOptions(question._id)
    await this.save(question, answerOptions)
  }

  // TODO: Next iteration: use type as interface?
  private async save(question: IQuestion, answerOptions: any) {
    // use text combination as key? "questions-id?"
    const key = `${question._id}`
    const valuesMapped = {
      question: question,
      answers: answerOptions
    }

    await this.redisClient.insert(key, JSON.stringify(valuesMapped))
  }
}

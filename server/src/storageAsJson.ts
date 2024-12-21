import { QuestionsManager } from "./services/questions_manager.ts"

if(process?.env?.token) {
  const questionManager = new QuestionsManager(process.env.token)
  await questionManager.storeAsJSON()
} else {
  console.error('Token required. please add it into .env file')
}

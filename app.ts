
// Example usage
(async () => {
    const mongoUri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
    const dbName = 'questionsDatabase';
    const token = 'xyz';
    const apiUrl = 'https://example.com/api/v1/questions';

    const dbService = new MongoDBService(mongoUri, dbName);
    await dbService.connect();

    const questionService = new QuestionService(dbService);
    await questionService.fetchAndSaveQuestions(token, apiUrl);

    await dbService.close();
})();

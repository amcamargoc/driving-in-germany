import axios, { Axios } from 'axios';

export class HttpClient {
  private axiosInstance: Axios;

  constructor(baseUrl: string, token: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl
    });
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    this.axiosInstance.defaults.headers.common['Content-Type'] = 'application/json'
  }

  async post(urlPath: string, payload: Object): Promise<any> {
    try {
      const response = await this.axiosInstance.post(urlPath, payload)
      return response
    } catch (error) {
      console.error('Error during POST request:', error)
      throw error;
    }
  }

  async get(url: string, payload: Object): Promise<any> {
    try {
      const response =  await this.axiosInstance.get(url, payload)
      return response
    } catch (error) {
      console.error('Error during GET request:', error);
      throw error;
    }
  }
}
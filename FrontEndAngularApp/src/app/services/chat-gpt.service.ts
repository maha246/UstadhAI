import { Token } from '@angular/compiler';
import axios from 'axios';
import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatGPTService {
  readonly configuration = new Configuration({
    apiKey: environment.openai.apiKey,
  });

  readonly openai = new OpenAIApi(this.configuration);
  constructor() {
    axios.defaults.headers.common['User-Agent'] = 'My App/1.0.0';
  }

  async getDataFromOpenAPI(prompt: string) {
    let requestData = {
      model: 'text-davinci-003', //'text-davinci-003',//"text-curie-001",
      prompt: prompt, //this.generatePrompt(animal),
      temperature: 0.5,
      max_tokens: 1100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    const completion = await this.openai.createCompletion(requestData);
    const result = completion.data.choices[0].text;
    //alert(result);

    return result;
  }

  async getReadingComprehension(
    grade: string,
    numberOfQuestions: number,
    numberOfSentences: number
  ) {
    let prompt: string = 'أرجو توليد مقطع نصي بمستوى ';
    prompt = prompt + grade + ' ابتدائي مكون من ';
    prompt =
      prompt +
      numberOfSentences +
      ' جمل، مع إعداد ' +
      numberOfQuestions +
      ' أسئلة';
    prompt = prompt + ' عن النص ';

    //alert(prompt);
    return await this.getDataFromOpenAPI(prompt);
  }
}

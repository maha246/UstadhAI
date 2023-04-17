import { Component } from '@angular/core';
import { QuizInput } from 'src/app/models/quiz-input';
import { FormsModule } from '@angular/forms';
import { ChatGPTService } from 'src/app/services/chat-gpt.service';
import { Router } from '@angular/router';
import { Document, Packer, Paragraph, Run, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const defaultQuestionsNum = 3;
const defaultSentencesNum = 5;
const defaultGrade = 'ثالث';

@Component({
  selector: 'app-arabic-quiz-generator',
  templateUrl: './arabic-quiz-generator.component.html',
  styleUrls: ['./arabic-quiz-generator.component.css'],
})
export class ArabicQuizGeneratorComponent {
  //generate 3 question by default
  result: string = '';
  chunks: string[] = [];
  sample: string = '';
  sampleChunks: string[] = [];
  constructor(private chatGPTService: ChatGPTService, private router: Router) {}
  quizInput: QuizInput = new QuizInput(
    defaultGrade,
    defaultQuestionsNum,
    defaultSentencesNum
  );
  quizInputSubmitted = false;
  async submitForm() {
    await this.chatGPTService
      .getReadingComprehension(
        this.quizInput.grade,
        this.quizInput.numberOfQuestions,
        this.quizInput.numberOfSentences
      )
      .then((result) => {
        this.result = result + '';
        const lines = this.result.split('\n');
        this.chunks = lines.filter((line) => line.trim() !== '');
        this.sampleChunks.push(this.result);
      });
  }

  async exportToDocs() {
    // create an array of sections
    const sections = this.sampleChunks.map((chunk) => ({
      children: [
        new Paragraph({
          children: [new TextRun(chunk)],
        }),
      ],
    }));

    // create a new document with the sections
    const doc = new Document({ sections });

    const packer = new Packer();
    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'example.docx');
  }
}

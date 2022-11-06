import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { CateQuestionService } from './cate-question.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  question: Question[] = [];

  constructor(private readonly _cateQuestionService: CateQuestionService) { }


  getQuestion() {
    const listCateQuestion = this._cateQuestionService.getCateQuestion();
    listCateQuestion.forEach(item => {
      for (let index = 1; index < 6; index++) {
        let question = new Question(`${item.name} câu hỏi số ${index}`, 0, item.id);
        this.question.push(question);
      }
    });
    return this.question;
  }
}

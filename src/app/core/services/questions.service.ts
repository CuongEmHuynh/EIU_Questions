import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { groupBy, map, mergeMap, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';
import { CateQuestionService } from './cate-question.service';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  question: Question[] = [];

  public _serviceQuestion = inject(HttpClient)
  constructor(private readonly _cateQuestionService: CateQuestionService) { }


  // getQuestion() {
  //   const listCateQuestion = this._cateQuestionService.getCateQuestion();
  //   listCateQuestion.forEach(item => {
  //     for (let index = 1; index < 6; index++) {
  //       let question = new Question(`${item.name} câu hỏi số ${index}`, 0, item.id);
  //       this.question.push(question);
  //     }
  //   });
  //   return this.question;
  // }


  getQuestionByCate(cateId: number): Observable<Question[]> {
    return this._serviceQuestion.get<Question[]>(`${apiUrl}Question/GetAllQuestionByCate?cateId=${cateId}`)
      .pipe(
        map((item => {
          item.map(ques => {
            ques.isAnswer = false
          })
          return item;
        }))
      )
  }
}

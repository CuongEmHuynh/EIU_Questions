import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CateQuestion } from '../models/cate-question';

@Injectable({
  providedIn: 'root'
})


export class CateQuestionService {
  cateQuestion: Array<CateQuestion> = [
    {
      id: 1,
      name: "Ngành Công Nghệ Thông Tin",
      totalScore: 0
    },
    {
      id: 2,
      name: "Ngành Quản Trị Kinh Doanh",
      totalScore: 0
    },
    // {
    //   id: 3,
    //   name: "Ngành Kỹ Thuật",
    //   totalScore: 0
    // },
    // {
    //   id: 4,
    //   name: "Ngành Điều Dưỡng",
    //   totalScore: 0
    // },
  ];
  constructor() { }


  getCateQuestion() {
    return this.cateQuestion;
  }
}



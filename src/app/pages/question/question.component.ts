import { Component, OnInit } from '@angular/core';
import { CateQuestion } from 'src/app/core/models/cate-question';
import { Question } from 'src/app/core/models/question';
import { CateQuestionService } from 'src/app/core/services/cate-question.service';
import { QuestionsService } from 'src/app/core/services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  score!: number;
  questions: Question[] = [];
  cateQuestion: CateQuestion[] = []
  constructor(private readonly _questionService: QuestionsService,
    private readonly _cateQuestionService: CateQuestionService) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.questions = this._questionService.getQuestion();
    this.cateQuestion = this._cateQuestionService.getCateQuestion();
  }


  getTotalSocre() {
    var objectMax = this.cateQuestion.map(item => {
      item.totalScore = this.questions.filter(val => val.cateId == item.id).reduce((sum, current) => sum + current.score, 0)
      return item;
    }).reduce((max, min) => max.totalScore > min.totalScore ? max : min);
    confirm(`Ngành bạn nên chọn là ${objectMax.name}`);
    window.location.reload();
  }

  getDataEmit($event: any): void {
    this.questions[$event.index].score = $event.value;
  }






}

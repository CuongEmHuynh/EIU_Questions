import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CateQuestion } from 'src/app/core/models/cate-question';
import { Question } from 'src/app/core/models/question';
import { CateQuestionService } from 'src/app/core/services/cate-question.service';
import { QuestionsService } from 'src/app/core/services/questions.service';
import { InfoUserComponent } from '../info-user/info-user.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  @ViewChild("infoModal") info!: InfoUserComponent

  score!: number;
  questions: Array<Question> = new Array<Question>;
  cateQuestions: CateQuestion[] = [];

  questionSub$!: Subscription;
  catequestionSub$!: Subscription;
  cateId: number = 1;


  constructor(private readonly _questionService: QuestionsService,
    private readonly _cateQuestionService: CateQuestionService) { }

  ngOnDestroy(): void {
    this.questionSub$.unsubscribe();
    this.catequestionSub$.unsubscribe();
  }

  ngOnInit() {
    this.getQuestion(this.cateId);
    this.getCateQuestion();
  }



  //Get Question  
  getQuestion(cateId: number): void {
    this.questionSub$ = this._questionService.getQuestionByCate(cateId).subscribe(res => {
      this.questions = res;
    })
  }
  getCateQuestion(): void {
    this.catequestionSub$ = this._cateQuestionService.getCateQuestion().subscribe(res => {
      this.cateQuestions = res;
    })
  }

  //Update score for question
  getDataEmit($event: any): void {
    this.questions[$event.index].score = $event.value;
    this.questions[$event.index].isAnswer = true;
  }

  //Validate answer
  checkValidate() {
    var check = this.questions.findIndex(item => item.isAnswer == false);
    if (check != -1) {
      confirm(`Bạn chưa trả lời câu hỏi ${check + 1}`);
      return false
    }
    return true;
  }
  //Calulartor total score for cateQuestion 
  getScoreCate(cateId: number) {
    var totalScore = this.questions.reduce((sum, current) => sum + current.score, 0);
    var indexCate = this.cateQuestions.findIndex(x => x.id == cateId);
    this.cateQuestions[indexCate].totalScore = totalScore;
  }

  nextPage() {
    if (this.checkValidate()) {
      this.getScoreCate(this.cateId);
      this.cateId++;
      this.getQuestion(this.cateId)
    }
  }

  //Find item Cate has max score
  finishAnswer() {
    this.getScoreCate(this.cateId);
    var itemCateMaxScore = this.cateQuestions.reduce((max, min) => max.totalScore > min.totalScore ? max : min);
    this.info.showModal(itemCateMaxScore)
  }
}

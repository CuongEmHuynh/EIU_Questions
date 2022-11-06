import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { PageRoutingModule } from './page-routing.module';
import { QuestionComponent } from './question/question.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PageRoutingModule,
        RatingModule.forRoot(),
        NgxStarRatingModule ,
        ReactiveFormsModule

    ],
    declarations: [
        QuestionComponent,
        RatingComponent],
})
export class PageModule { }

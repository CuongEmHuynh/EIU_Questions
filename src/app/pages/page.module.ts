import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { PageRoutingModule } from './page-routing.module';
import { QuestionComponent } from './question/question.component';
import { RatingComponent } from './rating/rating.component';
import { ExplainComponent } from './explain/explain.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PageRoutingModule,
        RatingModule.forRoot(),
        NgxStarRatingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule.forRoot(),

    ],
    declarations: [
        QuestionComponent,
        RatingComponent,
        ExplainComponent,
        InfoUserComponent],
})
export class PageModule { }

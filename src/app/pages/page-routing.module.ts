import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {
        path:'question',
        component:QuestionComponent
    },
    {
        path:'result',
        component:ResultComponent
    }
]




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule{}
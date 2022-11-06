import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./pages/page.module').then(m => m.PageModule)
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
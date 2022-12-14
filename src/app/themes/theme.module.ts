import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    imports: [CommonModule],
    exports: [HeaderComponent,FooterComponent],
    declarations: [HeaderComponent,FooterComponent],
    providers: [],
})
export class ThemeModule { }

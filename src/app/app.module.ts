import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KursusplanComponent } from './app.component';
import { KursusListComponent } from './kurser/kursus-list.component';
import { KursusCardComponent } from './kurser/kursus-card.component';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    KursusplanComponent,
    KursusListComponent,
    KursusCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [KursusplanComponent]
})
export class AppModule { }

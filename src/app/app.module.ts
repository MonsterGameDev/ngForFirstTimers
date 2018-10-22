import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KursusplanComponent } from './app.component';
import { KursusListComponent } from './kurser/kursus-list.component';
import { KursusCardComponent } from './kurser/kursus-card.component';
import { NavbarComponent } from './nav/navbar.component';
import { KursusService } from './kurser/kursus.service';
import { KursusDetailsComponent } from './kurser/kursus-details/kursus-details.component';

@NgModule({
  declarations: [
    KursusplanComponent,
    KursusListComponent,
    KursusCardComponent,
    NavbarComponent,
    KursusDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [KursusService],
  bootstrap: [KursusplanComponent]
})
export class AppModule { }

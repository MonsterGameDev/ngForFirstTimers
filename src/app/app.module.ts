import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { KursusplanComponent } from './app.component';
import { KursusListComponent } from './kurser/kursus-list.component';
import { KursusCardComponent } from './kurser/kursus-card.component';
import { NavbarComponent } from './nav/navbar.component';
import { KursusService } from './kurser/kursus.service';
import { KursusDetailsComponent } from './kurser/kursus-details/kursus-details.component';
import { appRoutes } from './routes';
import { CreateKursusComponent } from './kurser/create-kursus.component';
import { Error404Component } from './errors/404.component';
import { DetailsRouteActivatorService } from './kurser/kursus-details/kursusdetails-route-activator';
import  * as RouteFunctions from './routes';


@NgModule({
  declarations: [
    KursusplanComponent,
    KursusListComponent,
    KursusCardComponent,
    NavbarComponent,
    KursusDetailsComponent,
    CreateKursusComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    KursusService,
    DetailsRouteActivatorService,
    {
      provide: 'canDeactivateCreateKursus',
      useValue: RouteFunctions.isFormDirty
    }

  ],
  bootstrap: [KursusplanComponent]
})
export class AppModule { }

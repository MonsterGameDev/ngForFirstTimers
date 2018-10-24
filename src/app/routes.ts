import { KursusListComponent } from './kurser/kursus-list.component';
import { KursusDetailsComponent } from './kurser/kursus-details/kursus-details.component';
import { Routes } from '@angular/router';
import { CreateKursusComponent } from './kurser/create-kursus.component';
import { Error404Component } from './errors/404.component';
import { DetailsRouteActivatorService } from './kurser/kursus-details/kursusdetails-route-activator';
import { RxjsDemoComponent } from './rxjs/rxjs-demo.component';


export const appRoutes: Routes = [
  { path: 'kurser', component: KursusListComponent },
  { path: 'kurser/opret', component: CreateKursusComponent,
    canDeactivate: ['canDeactivateCreateKursus'] },
  { path: 'kurser/:id', component: KursusDetailsComponent,
    canActivate: [DetailsRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/kurser' },
  { path: 'user', loadChildren: './usermodule/user.module#UserModule' },
  { path: 'rxjs', component: RxjsDemoComponent },

];

export function isFormDirty(component: CreateKursusComponent): boolean {

  if (component.isDirty) {
    return window.confirm(
      'Er du sikker på at du vil forlade formularen uden at gemme...?');
  }

  return true;
}


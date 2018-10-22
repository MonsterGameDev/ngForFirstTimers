import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IKursus } from '../models/kursus.interface';

@Component({
  selector: 'app-kursus-list',
  template: `
    <h1 class="text-center pt-4">Upcomming Kurser</h1>
    <hr>
    <app-kursus-card [kursus]="kursus" (kursusClick)="handleDataSendFromChild($event)"></app-kursus-card>
  `
})

export class KursusListComponent implements OnInit {
  @ViewChild('card') componentRef: ElementRef;
  kursus: IKursus = {
    id: 1,
    name: 'Angular for Firsttimers',
    // tslint:disable-next-line:max-line-length
    description: 'Kurset sigter mod at gøre dig i stand til at forstå og anvende de mest anvendte funktionaliteter i Angular 6.0. Efter kurset vil du være i stand til at bygge et simpelt data-drevet website. Der vil være en del hands-on, men indholdet må - tiden taget i betragtning nødvendigvis være grundlæggende, og vi graver ikke dybt i specifikke mere komplicerede emner. ',
    startDate: '25. okt 2018',
    startTime: '08:30',
    price: 5000,
    imageUrl: '/assets/images/angular.png',
    location: {
      address: 'Klampenborgvej 205',
      city: 'Lyngby',
      country: 'Denmark'
    }
  };


  constructor() { }

  ngOnInit() {
  }

  handleDataSendFromChild(data: any) {
    console.log('data modtaget: ', this.kursus.name);
  }
}

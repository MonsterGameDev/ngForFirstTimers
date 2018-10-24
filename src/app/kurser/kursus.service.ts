import { IKursus } from '../models/kursus.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KursusService {
  kurser$: Observable<IKursus[]>;

  constructor(private http: HttpClient) {}

  getKurser(): Observable<IKursus[]> {
    this.kurser$ = this.http.get<IKursus[]> ('http://localhost:3000/kurser');
    return this.kurser$;
  }

  getKursus(id: number) {
    return KURSER.find(kursus => kursus.id === id);
  }

}

const KURSER: IKursus[] =  [{
  id: 1,
  name: 'Angular for Firsttimers',
  // tslint:disable-next-line:max-line-length
  description: 'Kurset sigter mod at gøre dig i stand til at forstå og anvende de mest anvendte funktionaliteter i Angular 6.0. Efter kurset vil du være i stand til at bygge et simpelt data-drevet website. Der vil være en del hands-on, men indholdet må - tiden taget i betragtning nødvendigvis være grundlæggende, og vi graver ikke dybt i specifikke mere komplicerede emner. ',
  startDate: new Date(2018, 10, 25),
  startTime: '08:30',
  price: 5000,
  imageUrl: '/assets/images/angular.png'
}, {
  id: 2,
  name: 'Grundlæggende TypeScript',
  // tslint:disable-next-line:max-line-length
  description: 'Få hjælp til at komme i gang med at benytte TypeScript. Få en forståelse for, hvordan man kan benytte TypeScript som basis for vedligeholdelsesbar JavaScript, og du får en viden om features, der er unikke for TypeScript. Desuden får du en praktisk indføring i brug af TypeScript i Visual Studio Code.',
  startDate: new Date(2018, 12, 1),
  startTime: '09:00',
  price: 5000,
  imageUrl: '/assets/images/typescript.jpg',
  location: {
    address: 'Klampenborgvej 205',
    city: 'Lyngby',
    country: 'Denmark'
  }
}, {
  id: 3,
  name: 'EcmaScript 2015 - ES6',
  // tslint:disable-next-line:max-line-length
  description: 'ES6 er stadig under udvikling, men en lang række features er allerede klar, og til dels også implementeret i en række moderne browsere. Til de endnu ikke implementerede features er der mulighed for enten at køre en transpiling (en sammentrækning af transformation og compiling), eller at inkludere en shim/polyfill. Dette gør det muligt at udnytte en stor del af ES6 allerede nu.',
  startDate: new Date(2018, 10, 25),
  startTime: '09:30',
  price: 5000,
  imageUrl: '/assets/images/es6.png',
  location: {
    address: 'Klampenborgvej 205',
    city: 'Lyngby',
    country: 'Denmark'
  }
}, {
  id: 4,
  name: 'NodeJS for udviklere',
  // tslint:disable-next-line:max-line-length
  description: 'Node.js er en softwareplatform, som bruges til at bygge skalérbare server-side applikationer. Node.js bruger JavaScript, er open source, har høj performance via non-blocking I/O og kan bruges sammen med fx Microsofts IIS og Mac. er open source, har høj performance via non-blocking I/O .',
  startDate: new Date(2018, 10, 25),
  startTime: '08:30',
  price: 5000,
  imageUrl: '/assets/images/html5.png',
  location: {
    address: 'Klampenborgvej 205',
    city: 'Lyngby',
    country: 'Denmark'
  }
}, {
  id: 5,
  name: 'RxJs',
  // tslint:disable-next-line:max-line-length
  description: 'Många av dagens moderna webb- och mobilapplikationer kretsar kring att reagera på användarevent och uppdatera information i realtid. När exempelvis en användare klickar på en knapp i sin telefon skall en annan uppkopplad användare notifieras, och så vidare. Det finns många olika sätt ',
  startDate: new Date(2018, 10, 25),
  startTime: '08:30',
  price: 5000,
  imageUrl: '/assets/images/rxjs.jpg',
  location: {
    address: 'Klampenborgvej 205',
    city: 'Lyngby',
    country: 'Denmark'
  }
}];

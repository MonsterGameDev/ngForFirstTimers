import { IKursus } from '../models/kursus.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class KursusService {
  kurser$: Observable<IKursus[]>;
  kursus$: Observable<IKursus>;

  constructor(private http: HttpClient) {}

  getKurser(): Observable<IKursus[]> {
    this.kurser$ = this.http.get<IKursus[]> ('http://localhost:3000/kurser');
    return this.kurser$;
  }

  getKursus(id: number) {
    this.kursus$ = this.http.get<IKursus>(`http://localhost:3000/kurser/${id}`);
    return this.kursus$;

   // return KURSER.find(kursus => kursus.id === id);
  }

}


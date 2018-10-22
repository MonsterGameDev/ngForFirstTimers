import { Component, OnInit } from '@angular/core';
import { KursusService } from '../kursus.service';
import { IKursus } from 'src/app/models/kursus.interface';

@Component({
templateUrl: './kursus-detaljer.component.html',
styles: [`
  kursus-image {height: 100px;}
`]
})

export class KursusDetailsComponent implements OnInit {
  kursus: IKursus;
  constructor(private svcKursus: KursusService) { }

  ngOnInit() {
    this.kursus = this.svcKursus.getKursus(1);
   }
}

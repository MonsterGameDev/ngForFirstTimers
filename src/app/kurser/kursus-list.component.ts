import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IKursus } from '../models/kursus.interface';
import { KursusService } from './kursus.service';

@Component({
  template: `
    <h1 class="text-center pt-4">Upcomming Kurser</h1>
    <hr>
    <div class="row card-group">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-5" *ngFor="let kursus of kurser">
        <app-kursus-card  [kursus]="kursus"
          (kursusClick)="handleDataSendFromChild($event)"></app-kursus-card>
      </div>
    </div>
  `
})

export class KursusListComponent implements OnInit {
  @ViewChild('card') componentRef: ElementRef;
  kurser: IKursus[];


  constructor(private svcKursus: KursusService) { }

  ngOnInit() {
    this.kurser = this.svcKursus.getKurser();
  }

  handleDataSendFromChild(data: any) {
    // console.log('data modtaget: ', this.kursus.name);
  }
}

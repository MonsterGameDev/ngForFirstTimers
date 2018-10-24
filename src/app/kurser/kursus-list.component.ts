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
   kurser: IKursus[];


  constructor(private svcKursus: KursusService) { }

  ngOnInit() {
    this.svcKursus.getKurser()
      .subscribe(
        (data: IKursus[]) => this.kurser = data,
        (error: any) => console.log(error),
        () => console.log('All done getting kurser')
      );
  }

  handleDataSendFromChild(data: any) {
    // console.log('data modtaget: ', this.kursus.name);
  }
}

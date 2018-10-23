import { Component, OnInit } from '@angular/core';
import { KursusService } from '../kursus.service';
import { IKursus } from 'src/app/models/kursus.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
templateUrl: './kursus-details.component.html',
styles: [`
  .kursus-image {height: 100px;}
`]
})

export class KursusDetailsComponent implements OnInit {
  kursus: IKursus;
  constructor(private svcKursus: KursusService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.kursus = this.svcKursus.getKursus(1);
    this.kursus = this.svcKursus.getKursus(+this.route.snapshot.params['id']);
   }
}

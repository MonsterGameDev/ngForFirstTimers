import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IKursus } from '../models/kursus.interface';

@Component({
  selector: 'app-kursus-card',
  templateUrl: 'kursus-card.component.html',
  styles: [`
    .green {color: green !important;}
  `]

})

export class KursusCardComponent implements OnInit {
  @Input() kursus: IKursus;
  @Output() kursusClick = new EventEmitter();

  specialProp = 'Hello there';

  constructor() { }

  ngOnInit() { }

  handleKursusClick() {
    console.log('oh my god');
    this.kursusClick.emit('sendt fra child... klikkelik');
  }

  paintTime() {
    if (this.kursus && this.kursus.startTime) {
      const kursustime: string = this.kursus.startTime;
      switch (kursustime) {
        case '08:30':
          return 'text-danger';
        case '09:00':
          return 'text-info';
        case '09:30':
          return 'text-success';
        default:
          return 'text-faded';
      }
    }
  }



}

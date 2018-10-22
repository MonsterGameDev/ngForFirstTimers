import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IKursus } from '../models/kursus.interface';

@Component({
  selector: 'app-kursus-card',
  templateUrl: 'kursus-card.component.html',

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



}

import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({

  template: `
    <button class="btn btn-primary" type="button" id="btn">click me</button>
  `
})

export class RxjsDemoComponent implements OnInit {
  myButton;
  constructor() { }

  ngOnInit() {
    this.myButton = document.getElementById('btn');
    // this.myButton.addEventListener('click', (event) =>
    //  {console.log('event', event); } );
    fromEvent(this.myButton, 'click')
      .subscribe ((val: MouseEvent) => console.log(val.clientX));

    interval(1000).pipe(
      map(val => val * 2),
      tap(() => console.log('hello')))
      .subscribe((val => console.log(val)));
   }
}

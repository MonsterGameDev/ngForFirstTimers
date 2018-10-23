import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Nyt Kursus</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Her kommer vores opret kursus form]</h3>
      <br><br>
      <button type="submit" class="btn btn-primary">GEM</button>
      <button type="button" class="btn btn-secondary" (click)="cancel()">CANCEL</button>
    </div>
  `
})

export class CreateKursusComponent implements OnInit {
  isDirty = true;
  constructor(private router: Router) { }

  ngOnInit() { }

  cancel() {
    this.router.navigate(['/kurser']);
  }
}

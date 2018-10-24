import { Component, OnInit } from '@angular/core';

@Component({
template: `
  <h1>Edit Profil</h1>
  <hr>
  <div class="col-md-6">
    <h3>[Edit Profil kommer her]</h3>
    <br><br>
    <button type="submit" class="btn btn-primary">GEM</button>
    <button type="button" class="btn btn-secondary">CANCEL</button>
  </div>
`
})

export class ProfileComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

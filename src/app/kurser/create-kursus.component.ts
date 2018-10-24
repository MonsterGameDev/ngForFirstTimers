import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'create-kursus.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px}
    .error input { background-color: #E3C3C5}
    .error ::-webkit-input-placeholder { color: #999}
    .error ::-moz-placeholder { color: #999}
    .error :-moz-placeholder { color: #999}
    .error :-ms-input-placeholder { color: #999}
  `]
})

export class CreateKursusComponent implements OnInit {
  isDirty = true;
  kursusForm: FormGroup;
  location: FormGroup;

  kursusTitel: FormControl;
  description: FormControl;
  startDate: FormControl;
  startTime: FormControl;
  price: FormControl;
  imgUrl: FormControl;
  address: FormControl;
  city: FormControl;
  country: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.kursusTitel = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.startDate = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
    this.startTime = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required]);
    this.imgUrl = new FormControl();
    this.address = new FormControl();
    this.city = new FormControl();
    this.country = new FormControl();
    

    this.kursusForm = new FormGroup({
      kursusTitel: this.kursusTitel,
      description: this.description,
      startDate: this.startDate,
      startTime: this.startTime,
      price: this.price,
      imgUrl: this.imgUrl,
      location: new FormGroup ({
        address: this.address,
        city: this.city,
        country: this.country})
    });

   }

  cancel() {
    this.router.navigate(['/kurser']);
  }

  saveKursus(formValues) {
    console.log(formValues);
  }

  validateKursusTitel() {
    return this.kursusTitel.valid || this.kursusTitel.untouched;
  }
}

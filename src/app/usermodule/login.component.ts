import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  templateUrl: 'login.component.html',
  styles: [`
    em { float: right; color:#E05C65; padding-left: 10px; }
  `]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(public auth: AuthService) { }

  ngOnInit() {

   }

  login(formValues) {
    this.auth.loginUser(this.username, this.password);
  }
}

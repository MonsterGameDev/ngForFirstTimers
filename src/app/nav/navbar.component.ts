import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usermodule/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styles: [`
    .navbar-nav {font-size: 18px;}
    #searchForm {margin-right: 100px }
    @media (max-width: 1200px) {#searchForm {display: none}}
  `]
})

export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) { }

  ngOnInit() { }
}

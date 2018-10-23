import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { KursusService } from '../kursus.service';

@Injectable()
export class DetailsRouteActivatorService implements CanActivate {

  constructor(private svcKursus: KursusService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const kursusExists = !!this.svcKursus.getKursus(+route.params['id']);

    if (!kursusExists) {
      this.router.navigate(['/404']);
    }
    return kursusExists;
  }
}

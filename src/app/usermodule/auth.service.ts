import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable()
export class AuthService {
  currentUser: IUser;
  constructor() { }

  loginUser(username: string, password: string): void {
    this.currentUser = {
      firstname: 'Peter',
      lastname: 'Petersen',
      username: username
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}

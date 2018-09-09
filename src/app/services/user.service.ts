import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  validateLogin ():string {
    return "Granted";
  }

  validateSignup ():string{
    return "bien";
  }

}

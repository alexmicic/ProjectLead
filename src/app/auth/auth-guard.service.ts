import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Auth } from './auth.service';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(
    private auth: Auth, 
    private router: Router
  ) {}
 
  canActivate() {
    if(this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

@Injectable()
export class AuthGuardAdmin implements CanActivate {
 
  constructor(
    private auth: Auth, 
    private router: Router
  ) {}
 
  canActivate() {
    if(this.auth.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['dashboard']);
      return false;
    }
  }
}
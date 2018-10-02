import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    isLoggedIn : string;
    type : string;
    canActivate() {
        this.isLoggedIn = localStorage.getItem('isLoggedin')
        this.type = localStorage.getItem('type');
        
        if (this.isLoggedIn == null? false :  Boolean(this.isLoggedIn)) {

            if(this.type === 'ORG')
                {
                    this.router.navigate(['/bank']);
                }
            return true;
        }
        
        this.router.navigate(['/login']);
        return false;
    }
}
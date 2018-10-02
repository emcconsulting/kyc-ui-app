import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
/*import { TranslateService } from '@ngx-translate/core';*/

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    user :string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.user = localStorage.getItem('user');
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
    }
}

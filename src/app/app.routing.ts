import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import { RequestsComponent } from './requests/requests.component';
import { SharingComponent } from './sharing/sharing.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path : 'home', component: HomeComponent},
    { path : 'requests', component: RequestsComponent},
    {path: 'sharing', component: SharingComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
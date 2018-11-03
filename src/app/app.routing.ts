import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import { RequestsComponent } from './requests/requests.component';
import { SharingComponent } from './sharing/sharing.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SeekerHomeComponent } from './seeker-home/seeker-home.component';
import { SeekerRequestDetailsComponent } from './seeker-request-details/seeker-request-details.component';
import { SeekerKycRequestsComponent } from './seeker-kyc-requests/seeker-kyc-requests.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path : 'home', component: HomeComponent},
    { path : 'requests', component: RequestsComponent},
    {path: 'sharing', component: SharingComponent},
    {path: 'admin', component: AdminHomeComponent},
    {path: 'seeker', component:SeekerHomeComponent},
    {path: 'seeker-request-details', component: SeekerRequestDetailsComponent},
    {path: 'seeker-kyc-request', component:SeekerKycRequestsComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
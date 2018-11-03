import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SidebarComponent} from './sidebar/sidebar.component'
import {HeaderComponent} from './header/header.component'
import { routing }        from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UserService} from './services/user.service'
import { AppComponent } from './app.component';
import {AuthGuard} from './guards/auth.guard';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';
import { RequestsComponent } from './requests/requests.component';
import { SharingComponent } from './sharing/sharing.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SeekerSidebarComponent } from './seeker-sidebar/seeker-sidebar.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { SeekerHomeComponent } from './seeker-home/seeker-home.component';
import { SeekerRequestDetailsComponent } from './seeker-request-details/seeker-request-details.component';
import { SeekerKycRequestsComponent } from './seeker-kyc-requests/seeker-kyc-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RequestsComponent,
    SharingComponent,
    AdminSidebarComponent,
    AdminHomeComponent,
    SeekerSidebarComponent,
    RequestViewComponent,
    RequestViewComponent,
    SeekerHomeComponent,
    SeekerRequestDetailsComponent,
    SeekerKycRequestsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RequestsComponent,
    SharingComponent
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

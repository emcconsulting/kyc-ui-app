import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  banks: Array<string> = ['HDFC','SBI','ICICI','AXIS'];
  admin : string = 'RBI';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model.username + ' ' + this.model.password);
    localStorage.setItem('user',this.model.username);

    if(this.model.username === this.admin){
      this.router.navigate(['admin']);
      return;
    }

    if(this.banks.indexOf(this.model.username) === -1){
      this.router.navigate(['home']);
    }else{
      this.router.navigate(['seeker']);
    }
  }

}

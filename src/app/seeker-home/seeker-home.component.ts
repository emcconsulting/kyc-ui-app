import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seeker-home',
  templateUrl: './seeker-home.component.html',
  styleUrls: ['./seeker-home.component.css']
})
export class SeekerHomeComponent implements OnInit {

  org = {
    'id':'SBI',
    'name': 'state bank of india',
    'email': 'contact@sbi.co.in',
    'adress': 'Bengaluru'
  }


  constructor() { }

  ngOnInit() {
  
  }

}

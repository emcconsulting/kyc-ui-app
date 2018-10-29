import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: any;

  constructor() { }

  ngOnInit() {
    //populate requests
    //getRequestsData() 
  }

  approve(selectedRequest){
    //approve selected request
  }

  reject(selectedRequest){
    //reject selected request
  }

}

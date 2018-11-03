import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RequestViewComponent } from '../request-view/request-view.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  requests: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  viewRequest(request){
    const dialogRef = this.dialog.open(RequestViewComponent, {
      width: '350px',
      height: '330px',
      data: {},
  });
  }
  
}

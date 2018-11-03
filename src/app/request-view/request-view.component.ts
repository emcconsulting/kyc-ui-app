import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequestViewComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    request : any;

  ngOnInit() {
    this.request = this.data;
  }

  onNoClose(): void {
    this.dialogRef.close();
  }

}

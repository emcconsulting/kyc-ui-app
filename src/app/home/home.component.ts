import { Component, OnInit } from '@angular/core';
// import {FileService} from '../services/file.service';
// import { UserService } from '../services/user.service';
// import { FileUploadComponent } from '../file-upload/file-upload.component';
// import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId : string;
  user = {
    'id':1234,
    'name': 'dravid',
    'email': 'thewall@gmail.com',
    'adress': 'Bengaluru'
  }

  orgList = ['HDFC','SBI','ICICI','AXIS'];
  
  // constructor(private fileService: FileService, private userService: UserService,public dialog: MatDialog) {
  // }

  constructor(){
    
  }

  ngOnInit() {

    this.userId = localStorage.getItem('user');
    //this.getUserData();
  }

  // openUploadFileDialogue(): void {

  //   const dialogRef = this.dialog.open(FileUploadComponent, {
  //     width: '350px',
  //     height: '330px',
  //     data: {},
  // });

  // dialogRef.afterClosed().subscribe(data => {
  //     if (data !== undefined) {
  //       this.fileService.uploadFile(data.file,data.docType,this.userId,data.orgId)
  //       .subscribe((response) => {
  //         console.log(response);
  //         this.getUserData();
  //       }, (error) => {
  //         console.log('error');
  //       });
  //     }
  // });
  // }

  // getUserData(): void{
  //   this.userService.getUserDetails(this.userId).subscribe((response) => {
  //     this.userData = JSON.parse(response);
  //     if(this.userData.documents){
  //         this.documents = this.userData.documents;
  //     }
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  //   );
  // }


  // viewDocumentSharedStatus(document): void{
  //     this.selectedDocument = document;
  //     var  orgAccessList = this.selectedDocument.orgsToAccess.map(orgObj => orgObj.org);
  //     this.orgAccessSelectionList = this.orgList.filter( org => orgAccessList.indexOf(org) < 0);
  //     this.expanded = true;
  // }

  // back(): void{
  //   this.getUserData();
  //   this.expanded = false;
  // }

  // provideAccess() :void{
  //   this.accessInput = false;

  //   if(!this.selectedOrg){
  //     return;
  //   }

  //   this.fileService.provideAccessToOrg(this.selectedDocument.Key, this.userId,
  //      this.selectedOrg,this.selectedDocument.docType).subscribe(
  //     (succesResponse) =>{
  //       this.selectedDocument.orgsToAccess.push({'org':this.selectedOrg,'isVerified':false});
  //       this.selectedOrg = undefined;
  //       console.log(succesResponse);
  //     },(error) =>{
  //       console.log(error);
  //     }
  //   );
  // }

}

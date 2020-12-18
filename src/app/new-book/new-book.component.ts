import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  subUrl: string = "";
  jsonData: any;
  url = "https://localhost:44369/api/";
  newBookForm : FormGroup = new FormGroup ({});
  bookName: any;
  serialNum: any;
  authorName: any;
  branch: any;
  publications: any;
  isAvailable: any;
  newAuthor:any;
  newBranch:any;
  newPublication:any;

  constructor(private http: HttpClient) {    
  }

  ngOnInit(): void {
 this.newBookForm = new FormGroup({
     BookName: new FormControl(),
     SerialNumber: new FormControl(),
      AuthorName: new FormControl(),
      Branch: new FormControl(),
      Publications: new FormControl(),
      IsAvailable: new FormControl()
    });
 }

  onSubmit(): void {
    this.subUrl = this.url + 'ServiceBooks/PostServiceBooks';
    this.http.post(this.subUrl, {
      serviceBookName: this.bookName,
      serviceSerialNumber: this.serialNum,
      serviceAuthorName: this.authorName,
      serviceBranch: this.branch,
      servicePublications: this.publications,
      serviceIsAvailable: this.isAvailable
    }).toPromise().then((data: any) => {
      this.jsonData = data;
      console.log(data);
    })
  }

  addAuthor():void{
    this.newAuthor = prompt("New Author");
    this.subUrl = this.url + 'ServiceAuthors/PostServiceAuthor';
    this.http.post(this.subUrl,{serviceAuthorName : this.newAuthor}).toPromise().then((data:any)=>{alert(data.serviceAuthorName+' added successfully')});
  }
  addBranch():void{
    this.subUrl = this.url + 'ServiceBooks/PostServiceBranches';
    this.newBranch = prompt("New Branch");
    this.http.post(this.subUrl,{serviceBranch : this.newBranch}).toPromise().then((data:any)=>{alert(data.serviceBranch+' added successfully')});
    
  }
  addPublication():void{
    this.subUrl = this.url + 'ServiceBooks/PostServicePublications';
    this.newPublication = prompt("New Publication");
    this.http.post(this.subUrl,{servicePublications : this.newPublication}).toPromise().then((data:any)=>{alert(data.servicePublications+' added successfully')});
    
  }
}

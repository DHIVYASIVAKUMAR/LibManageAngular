import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editBookForm: FormGroup = new FormGroup({});
  jsonData:any;
  jsonEditData:any;
  subUrl: string = "";
  url = "https://localhost:44369/api/";
  bookName: any;
  serialNum: any;
  authorName: any;
  branch: any;
  publications: any;
  isAvailable: any;
  newAuthor: any;
  newBranch: any;
  newPublication: any;
  editBookid:any;
  authorList: any;
  branchList: any;
  publicationList: any;
  constructor(private http:HttpClient, private router:ActivatedRoute, private navigateRouter:Router) { }

  ngOnInit(): void {
this.editBookForm = new FormGroup({
    BookName: new FormControl( null,[Validators.required]),
    SerialNumber: new FormControl(null,[ Validators.required]),
    AuthorName: new FormControl(null, [Validators.required]),
   Branch: new FormControl(null, [Validators.required]),
    Publications: new FormControl( null,[Validators.required]),
    IsAvailable: new FormControl( null,[Validators.required])
  });                          
 this.http.get(this.url + 'ServiceAuthors/GetAuthor').toPromise().then((data: any) => { this.authorList = data; });
    this.http.get(this.url + 'ServiceBooks/GetBranch').toPromise().then((data: any) => { this.branchList = data; });
    this.http.get(this.url + 'ServiceBooks/GetPublication').toPromise().then((data: any) => { this.publicationList = data; });
    let id = this.router.snapshot.paramMap.get('id');
    this.editBookid = id;
    this.http.get('https://localhost:44369/api/ServiceBooks/GetServiceBooks/'+id).toPromise().then((data:any) => {      
      this.bookName = data.serviceBookName;
      this.authorName = data.serviceAuthorName;
      this.branch = data.serviceBranch;
      this.publications = data.servicePublications;
      this.isAvailable = data.serviceIsAvailable;
      this.serialNum = data.serviceSerialNumber;
    });
   
  } 

  onSubmit() { 
  
    if(this.editBookForm.status != 'INVALID')
    {
    this.subUrl = this.url + 'ServiceBooks/PutServiceBooks/'+this.editBookid;
    this.http.put(this.subUrl, {
      serviceBookId : this.editBookid,
      serviceBookName: this.bookName,
      serviceSerialNumber: this.serialNum,
      serviceAuthorName: this.authorName,
      serviceBranch: this.branch,
      servicePublications: this.publications,
      serviceIsAvailable: this.isAvailable
    }).toPromise().then((data: any) => {
      this.jsonEditData = data;
      alert('Book Saved successfullty ! ...');
      console.log(data);      
      this.navigateRouter.navigate(['bookHome/']);
    });    
    }
    else
    {
      alert('Please fill required data ');
    }
    
    }
  addAuthor(): void {
    this.newAuthor = prompt("New Author");
    this.subUrl = this.url + 'ServiceAuthors/PostServiceAuthor';
    this.http.post(this.subUrl, { serviceAuthorName: this.newAuthor }).toPromise().then((data: any) => { alert(data.serviceAuthorName + ' added successfully') });
    window.location.reload();
  }
  addBranch(): void {
    this.subUrl = this.url + 'ServiceBooks/PostServiceBranches';
    this.newBranch = prompt("New Branch");
    this.http.post(this.subUrl, { serviceBranch: this.newBranch }).toPromise().then((data: any) => { alert(data.serviceBranch + ' added successfully') });
    window.location.reload();
  }
  addPublication(): void {
    this.subUrl = this.url + 'ServiceBooks/PostServicePublications';
    this.newPublication = prompt("New Publication");
    this.http.post(this.subUrl, { servicePublications: this.newPublication }).toPromise().then((data: any) => { alert(data.servicePublications + ' added successfully') });
    window.location.reload();
  }
}

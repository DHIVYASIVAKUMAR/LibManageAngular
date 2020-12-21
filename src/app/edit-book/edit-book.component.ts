import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  jsonData:any;
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
  authorList: any;
  branchList: any;
  publicationList: any;
  constructor(private http:HttpClient, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.http.get('https://localhost:44369/api/ServiceBooks/GetServiceBooks/'+id).toPromise().then((data:any) => {
      this.jsonData = data;
      console.log(this.jsonData);
    })
    this.http.get(this.url + 'ServiceAuthors/GetAuthor').toPromise().then((data: any) => { this.authorList = data; });
    this.http.get(this.url + 'ServiceBooks/GetBranch').toPromise().then((data: any) => { this.branchList = data; });
    this.http.get(this.url + 'ServiceBooks/GetPublication').toPromise().then((data: any) => { this.publicationList = data; });
  }

  editBookForm = new FormGroup({
    serviceBookName: new FormControl(),
    serviceSerialNumber: new FormControl(),
    serviceAuthorName: new FormControl(),
    serviceBranch: new FormControl(),
    servicePublications: new FormControl(),
    serviceIsAvailable: new FormControl()
  });

  onSubmit() {
    console.log(this.editBookForm.value);
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

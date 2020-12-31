import { Router } from '@angular/router';
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
  newBookForm: FormGroup = new FormGroup({});
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

  constructor(private http: HttpClient,private router :Router) {
    this.http.get(this.url + 'ServiceAuthors/GetAuthor').toPromise().then((data: any) => { this.authorList = data; });
    this.http.get(this.url + 'ServiceBooks/GetBranch').toPromise().then((data: any) => { this.branchList = data; });
    this.http.get(this.url + 'ServiceBooks/GetPublication').toPromise().then((data: any) => { this.publicationList = data; });
  }

  ngOnInit(): void {
    this.newBookForm = new FormGroup({
      BookName: new FormControl(null, [Validators.required]),
      SerialNumber: new FormControl(null, [Validators.required]),
      AuthorName: new FormControl(null, [Validators.required]),
      Branch: new FormControl(null, [Validators.required]),
      Publications: new FormControl(null, [Validators.required]),
      IsAvailable: new FormControl(null, [Validators.required])
    });


  }

  onSubmit(): void {
    if (this.newBookForm.status != 'INVALID') {
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
        alert('Book Created successfullty ! ...');
        console.log(data);
       this.router.navigate(['/bookHome']);
      });

    }
    else {
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

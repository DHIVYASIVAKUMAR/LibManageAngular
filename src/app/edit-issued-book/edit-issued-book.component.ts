import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-issued-book',
  templateUrl: './edit-issued-book.component.html',
  styleUrls: ['./edit-issued-book.component.css']
})
export class EditIssuedBookComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute, private navigateRouter: Router) { }
  jsonData: any;
  bookName: any;
  authorName: any;
  branch: any;
  student: any;
  email: any;
  id: any;
  fromDate: any;
  toDate: any;
  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    this.id = id;
    this.http.get('https://localhost:44369/api/ServiceIssuedBooks/GetServiceIssuedBooks/' + this.id).toPromise().then((data: any) => {
      this.bookName = data.serviceBookName;
      this.authorName = data.serviceAuthorName;
      this.branch = data.serviceBranch;
      this.student = data.serviceStudentName;
      this.email = data.serviceStudentEmail;
      this.fromDate = data.fromDate;
      this.toDate = data.toDate;
      console.log(data);
    });
  }
  editIssuedBookForm = new FormGroup({
    serviceBookName: new FormControl(),
    serviceAuthorName: new FormControl(),
    serviceBranch: new FormControl(),
    serviceStudent: new FormControl(),
    serviceEmail: new FormControl(),
    fromDate: new FormControl(null, [Validators.required]),
    toDate: new FormControl(null, [Validators.required])
  });

  onSubmit() {
    if (this.editIssuedBookForm.status != 'INVALID') {
      this.http.put('https://localhost:44369/api/ServiceIssuedBooks/PutServiceIssuedBooks?id=' + this.id + '&fromDate=' + this.fromDate + '&toDate=' + this.toDate, {
      }).toPromise().then((data: any) => {
        console.log(data);
        alert("Saved Successfullly");
        this.navigateRouter.navigate(['issuedBookHome/']);
      });
      console.log(this.editIssuedBookForm.value);
    }
    else {
      alert('Please fill required data ');
    }

  }
}

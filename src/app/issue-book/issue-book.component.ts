import { BookIssueServiceService } from './../book-issue-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
  bookData:any;
  studentData:any;
  bookId:any;
  student:any;
  fromDate:any;
  toDate:any;
  constructor(private http:HttpClient, private myService:BookIssueServiceService,private router:Router) { }  
    ngOnInit(): void {     
      this.bookId = this.myService.getBookId();
      this.student = this.myService.getStudentId();
      this.http.get('https://localhost:44369/api/ServiceBooks/GetServiceBooks/'+this.bookId).toPromise().then((data:any) => {
        this.bookData = data;
        console.log(data);
      });
      this.http.get('https://localhost:44369/api/ServiceStudents/GetServiceStudents/'+this.student).toPromise().then((data:any) => {
        this.studentData = data;
        console.log(data);
      });
    }  
  
    onSubmit() {  
      this.http.post('https://localhost:44369/api/ServiceIssuedBooks/PostServiceIssuedBooks',{
        bookId : this.bookId,
        studentId:this.student,
        serviceFromDate:this.fromDate,
        serviceToDate:this.toDate
      }).toPromise().then((data:any) =>{
        console.log(data);
        alert('Book Issued Successfully');
       this.router.navigate(['issuedBookHome/']);
      })
    }

  }
  
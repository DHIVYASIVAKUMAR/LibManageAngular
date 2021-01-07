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
  
  bookName:any;
  authorName:any;
  branch:any;
  publications:any;
  
  studentName:any;
  email:any;
  bookId:any;
  studentId:any;
  fromDate:any;
  toDate:any;
  constructor(private http:HttpClient, private myService:BookIssueServiceService,private router:Router) { }  
    ngOnInit(): void {     
      this.bookId = this.myService.getBookId();
      this.studentId = this.myService.getStudentId();
      this.http.get('https://localhost:44369/api/ServiceBooks/GetServiceBooks/'+this.bookId).toPromise().then((data:any) => {
        this.bookName = data.serviceBookName;
        this.authorName = data.serviceAuthorName;
        this.branch = data.serviceBranch;
        this.publications= data.servicePublications;
        console.log(data);
      });
      this.http.get('https://localhost:44369/api/ServiceStudents/GetServiceStudents/'+this.studentId).toPromise().then((data:any) => {
        this.studentName = data.serviceStudentName;
        this.email = data.serviceEmail;
        console.log(data);
      });
    }  
  
    onSubmit() {  
      if(this.error.isError != true){
        this.http.post('https://localhost:44369/api/ServiceIssuedBooks/PostServiceIssuedBooks',{
        bookId : this.bookId,
        studentId:this.studentId,
        serviceFromDate:this.fromDate,
        serviceToDate:this.toDate
      }).toPromise().then((data:any) =>{
        console.log(data);
        alert('Book Issued Successfully');
       this.router.navigate(['issuedBookHome/']);
      })
      }
      else{
        alert("please enter correct value");
      }
    }

    error:any={isError:false, errorMessage:""};
    compareTwoDates(){
      if(new Date(this.toDate)< new Date(this.fromDate)){
       this.error = {isError:true, errorMessage:"To Date cannot before From date"};
      }
      else{
        this.error = {isError:false, errorMessage:""};
      }
    }
  }
  
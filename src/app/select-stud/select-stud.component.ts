import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BookIssueServiceService } from '../book-issue-service.service';

@Component({
  selector: 'app-select-stud',
  templateUrl: './select-stud.component.html',
  styleUrls: ['./select-stud.component.css']
})
export class SelectStudComponent implements OnInit {
  issueBookId:any;  
  studentId:any;
  bookData:any;
  searchString?:string;
  selectedStudData:any;  
  url = 'https://localhost:44369/api/';
  studentData:any;
  constructor(private http:HttpClient, private router : Router, private activatedRouter:ActivatedRoute,private myService:BookIssueServiceService) { }

  ngOnInit(): void {
this.issueBookId = this.activatedRouter.snapshot.paramMap.get('id');
    this.http.get(this.url+'ServiceStudents/Getstudent').toPromise().then((data:any) => {this.studentData = data; console.log(data);});
  }
 select(id:any):void{  
   this.studentId = id;
   this.myService.setId(this.issueBookId,id);
   this.router.navigate(['newbookIssue/']);
 }
 
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  name: any;
  branches: any;
  gender: any;
  phoneNum: any;
  address: any;
  city: any;
  email: any;
  password: any;

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  jsonData:any;
  ngOnInit(): void {    
    let id = this.router.snapshot.paramMap.get('id');    
    this.http.get('https://localhost:44369/api/ServiceStudents/GetServiceStudents/'+id).
    toPromise().then((data:any) => {
      this.jsonData = data;
      console.log(data);
      this.name=data.serviceStudentName;
      this.branches = data.serviceStudentBranch;
      this.gender = data.serviceGender;
      this.phoneNum = data.servicePhoneNumber;
      this.address = data.serviceAddress;
      this.city = data.serviceCity;
      this.email = data.serviceEmail,
      this.password = data.servicePassword;
    });

  }

}

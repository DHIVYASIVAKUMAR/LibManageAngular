import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
newStudentForm : FormGroup = new FormGroup({});
jsonData: any;
url = "https://localhost:44369/api/";
branchList:any;
subUrl:any;
password:any;
email:any;
city:any;
address:any;
phoneNum:any;
gender:any;
branches:any;
name:any;
newBranch:any;
  constructor(private http: HttpClient) {
    this.http.get(this.url+'ServiceStudentBranches/GetstudentBranches').toPromise().then((data:any)=>{this.branchList = data;});
   }

  ngOnInit(): void {   
  
  this.newStudentForm = new FormGroup({
    serviceStudentName: new FormControl(),
    serviceStudentBranch: new FormControl(),
    serviceGender : new FormControl(),
    servicePhoneNumber: new FormControl(),
    serviceAddress: new FormControl(),
    serviceCity: new FormControl(),
    serviceEmail: new FormControl(),
    servicePassword : new FormControl() 
  });
}
  onSubmit():void {
  this.subUrl = this.url+'ServiceStudents/PostServiceStudents';
  this.http.post(this.subUrl,{
    serviceStudentName : this.name,
    serviceStudentBranch : this.branches,
    serviceGender : this.gender,
    servicePhoneNumber:this.phoneNum,
    serviceAddress : this.address,
    serviceCity : this.city,
    serviceEmail : this.email,
    servicePassword :this.password
  }).toPromise().then((data:any)=>{console.log(data);});    
    alert('Created Successfully');
    window.location.reload();
  }

  addBranch():void{
    this.subUrl = this.url+'ServiceStudentBranches/PostServiceStudentBranch';
    this.newBranch = prompt('Enter Branch Name ');
    this.http.post(this.subUrl,{serviceStudentBranch : this.newBranch}).toPromise().then((data:any) => {console.log(data);alert('Added successfully');});
    window.location.reload();
  }
}

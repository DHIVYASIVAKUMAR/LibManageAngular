import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  url = 'https://localhost:44369/api/';
  studentData: any;
  BranchList: any;
  id: any;
  subUrl: any;
  password: any;
  email: any;
  city: any;
  address: any;
  phoneNum: any;
  gender: any;
  branches: any;
  name: any;
  newBranch: any;
  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.http.get(this.url + 'ServiceStudentBranches/GetstudentBranches').toPromise().then((data: any) => { this.BranchList = data; });
    this.http.get(this.url + 'ServiceStudents/GetServiceStudents/' + this.id).toPromise().then((data: any) => { this.studentData = data;  });
  }
  editStudentForm = new FormGroup({
    serviceStudentName: new FormControl(),
    serviceStudentBranch: new FormControl(),
    serviceGender: new FormControl(),
    servicePhoneNumber: new FormControl(),
    serviceAddress: new FormControl(),
    serviceCity: new FormControl(),
    serviceEmail: new FormControl(),
    servicePassword: new FormControl()
  });

  onSubmit() {
    this.subUrl = this.url + 'ServiceStudents/PostStudents';
    this.http.post(this.subUrl, {
      serviceStudentId:this.studentData.serviceStudentId,
      serviceStudentName: this.name,
      serviceStudentBranch: this.branches,
      serviceGender: this.gender,
      servicePhoneNumber: this.phoneNum,
      serviceAddress: this.address,
      serviceCity: this.city,
      serviceEmail: this.email,
      servicePassword: this.password
    }).toPromise().then((data: any) => { 
      console.log(data); 
      if(data){alert('Saved Successfully');}
    });
    
   // window.location.reload();
  }

  addBranch(): void {
    this.subUrl = this.url + 'ServiceStudentBranches/PostServiceStudentBranch';
    this.newBranch = prompt('Enter Branch Name ');
    this.http.post(this.subUrl, { serviceStudentBranch: this.newBranch }).toPromise().then((data: any) => { console.log(data); alert('Added successfully'); });
    window.location.reload();
  }
}

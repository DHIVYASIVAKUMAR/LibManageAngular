import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private router: ActivatedRoute, private http: HttpClient, private navigateRouter: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.http.get(this.url + 'ServiceStudentBranches/GetstudentBranches').toPromise().then((data: any) => { this.BranchList = data; });
    this.http.get(this.url + 'ServiceStudents/GetServiceStudents/' + this.id).
      toPromise().then((data: any) => {
        console.log(data);
        this.name = data.serviceStudentName;
        this.branches = data.serviceStudentBranch;
        this.gender = data.serviceGender;
        this.phoneNum = data.servicePhoneNumber;
        this.address = data.serviceAddress;
        this.city = data.serviceCity;
        this.email = data.serviceEmail,
          this.password = data.servicePassword;
      });
  }
  editStudentForm = new FormGroup({
    serviceStudentName: new FormControl(null, [Validators.required]),
    serviceStudentBranch: new FormControl(null, [Validators.required]),
    serviceGender: new FormControl(null, [Validators.required]),
    servicePhoneNumber: new FormControl(null, [Validators.required]),
    serviceAddress: new FormControl(null, [Validators.required]),
    serviceCity: new FormControl(null, [Validators.required]),
    serviceEmail: new FormControl(null, [Validators.required]),
    servicePassword: new FormControl(null, [Validators.required])
  });

  onSubmit() {
    if (this.editStudentForm.status != 'INVALID') {
      this.subUrl = this.url + 'ServiceStudents/PutServiceStudents/' + this.id;
      this.http.put(this.subUrl, {
        serviceStudentId: this.id,
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
        if (data) {
          alert('Saved Successfully');
          this.navigateRouter.navigate(['studentHome/']);
        }
      });
    }
    else {
      alert('Please fill required data ');
    }

  }

  addBranch(): void {
    this.subUrl = this.url + 'ServiceStudentBranches/PostServiceStudentBranch';
    this.newBranch = prompt('Enter Branch Name ');
    this.http.post(this.subUrl, { serviceStudentBranch: this.newBranch })
    .toPromise().then((data: any) => {
       console.log(data); 
      //  alert('Added successfully');
       });
    window.location.reload();
  }
}

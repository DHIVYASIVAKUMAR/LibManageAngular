import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 
  editStudentForm = new FormGroup({
    serviceStudentName: new FormControl(),
    serviceStudentBranch: new FormControl(),
    serviceGender : new FormControl(),
    servicePhoneNumber: new FormControl(),
    serviceAddress: new FormControl(),
    serviceCity: new FormControl(),
    serviceEmail: new FormControl(),
    servicePassword : new FormControl()
  });

  onSubmit() {
    console.log(this.editStudentForm.value);
  }
}

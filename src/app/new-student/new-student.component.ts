import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newStudentForm = new FormGroup({
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
    console.log(this.newStudentForm.value);
  }
}

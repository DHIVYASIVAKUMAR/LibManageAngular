import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editBookForm = new FormGroup({
    serviceBookName: new FormControl(),
    serviceSerialNumber: new FormControl(),
    serviceAuthorName: new FormControl(),
    serviceBranch: new FormControl(),
    servicePublications: new FormControl(),
    serviceIsAvailable: new FormControl()
  });

  onSubmit() {
    console.log(this.editBookForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-issued-book',
  templateUrl: './edit-issued-book.component.html',
  styleUrls: ['./edit-issued-book.component.css']
})
export class EditIssuedBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editIssuedBookForm = new FormGroup({
    serviceBookName: new FormControl(),
    serviceSerialNumber: new FormControl(),
    serviceAuthorName: new FormControl(),
    serviceBranch: new FormControl(),
    servicePublications: new FormControl(),
    serviceIsAvailable: new FormControl()
  });

  onSubmit() {
    console.log(this.editIssuedBookForm.value);
  }
}

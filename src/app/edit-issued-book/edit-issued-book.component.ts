import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-issued-book',
  templateUrl: './edit-issued-book.component.html',
  styleUrls: ['./edit-issued-book.component.css']
})
export class EditIssuedBookComponent implements OnInit {

  constructor(private http:HttpClient,private router: ActivatedRoute) { }
jsonData:any;
id:any;
  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
this.id  = id;
this.http.get('https://localhost:44369/api/ServiceIssuedBooks/GetServiceIssuedBooks/'+this.id).toPromise().then((data:any) => {this.jsonData = data;console.log(data);});
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css']
})
export class BookHomeComponent implements OnInit {
  deleteFlag:any;
  id:any;
  url = 'https://localhost:44369/api/';
  bookData:any;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.http.get(this.url+'ServiceBooks/Getbook').toPromise().then((data:any) => {this.bookData = data; console.log(data);});
  }

  deleteBook(serviceBookId:any): void {
    if(confirm('Do you want to delete this book .? ')){
      this.http.delete('https://localhost:44369/api/ServiceBooks/DeleteServiceBooks/'+serviceBookId).toPromise().then((data:any) => {
        alert('Deleted successfully ');
        window.location.reload();
      })
    }
    else{
      window.location.reload();
    }    
  }
editBook(serviceBookId:any):void{
this.router.navigate(['/editBook',serviceBookId]);
}

}

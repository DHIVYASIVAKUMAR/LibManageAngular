import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-issued-book-home',
  templateUrl: './issued-book-home.component.html',
  styleUrls: ['./issued-book-home.component.css']
})
export class IssuedBookHomeComponent implements OnInit {
  issuedBookData:any;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44369/api/ServiceIssuedBooks/GetissuedBook').toPromise().then((data:any) => {
      this.issuedBookData = data;
      console.log(data);
    });
  }
editIssuedBook(serviceIssuedId:any):void{
this.router.navigate(['/editIssuedBook',serviceIssuedId]);
}

returnBook(id:any):void{
  if(confirm('Do you want to Return this book .? ')){
    this.http.delete('https://localhost:44369/api/ServiceIssuedBooks/DeleteServiceIssuedBooks/'+id).toPromise().then((data:any)=>{
      console.log(data);      
      alert('Returned successfully ');
      window.location.reload();
    });
  }
  else{
    window.location.reload();
  }    
}
  
}


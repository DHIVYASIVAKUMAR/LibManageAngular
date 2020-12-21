import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  url = 'https://localhost:44369/api/';
  studentData:any;
  constructor(private http:HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.http.get(this.url+'ServiceStudents/Getstudent').toPromise().then((data:any) => {this.studentData = data; console.log(data);});
  }

  deleteStudent(serviceStudentId:any):void{
    if(confirm('Do you want to delete this Student ? ')){
      this.http.delete('https://localhost:44369/api/ServiceStudents/DeleteServiceStudents/'+serviceStudentId).toPromise().then((data:any) => {
        alert('Deleted successfully ');
        window.location.reload();
      })
    }
    else{
      window.location.reload();
    }
  }
 
  editStudent(id:any){
this.router.navigate(['/editStudent',id]);
  }
  studentDetails(id:any){
    this.router.navigate(['/studentDetail',id]);
  }

}

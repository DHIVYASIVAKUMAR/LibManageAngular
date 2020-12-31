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
  studentData: any;
  issuedData: any;
  searchString?:string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(this.url + 'ServiceStudents/Getstudent')
      .toPromise().then((data: any) => {
        this.studentData = data;
        console.log(data);
      });
    this.http.get('https://localhost:44369/api/ServiceIssuedBooks/GetissuedBookDetail')
      .toPromise().then((data: any) => {
        console.log(data);
        this.issuedData = data;
      });
  }

  deleteStudent(serviceStudentId: any): void {
    let flag = 0;
    for (let index = 0; index < this.issuedData.length; index++) {
      if (this.issuedData[index].studentId == serviceStudentId) {
        flag = 1;
      }
    }
    if (flag == 0) {
      if (confirm('Do you want to delete this Student ? ')) {
        this.http.delete('https://localhost:44369/api/ServiceStudents/DeleteServiceStudents/' + serviceStudentId).toPromise().then((data: any) => {
          alert('Deleted successfully ');
          window.location.reload();
        })
      }
      else {
        window.location.reload();
      }
    }
    else
    {
      if(confirm('Please return all books ')){
        this.router.navigate(['issuedBookHome']);
      }else{
        window.location.reload();
      }
    }

  }

  editStudent(id: any) {
    this.router.navigate(['/editStudent', id]);
  }
  studentDetails(id: any) {
    this.router.navigate(['/studentDetail', id]);
  }

}

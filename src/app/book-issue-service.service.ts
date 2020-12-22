import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookIssueServiceService {

  bookId:any;
  studentId:any;
  constructor() { }

  setId(bookID:any,studentID:any):void{
   this.bookId = bookID;
   this.studentId = studentID;
  }
  getBookId():any{
    return this.bookId;
  }
  getStudentId():any{
    return this.studentId;
  }
}

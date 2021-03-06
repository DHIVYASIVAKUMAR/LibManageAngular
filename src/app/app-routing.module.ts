import { NewStudentComponent } from './new-student/new-student.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookHomeComponent } from './book-home/book-home.component';
import { HomeComponent } from './home/home.component';
import { IssuedBookHomeComponent } from './issued-book-home/issued-book-home.component';
import { NewBookComponent } from './new-book/new-book.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditIssuedBookComponent } from './edit-issued-book/edit-issued-book.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { SelectStudComponent } from './select-stud/select-stud.component';
import { IssueBookComponent } from './issue-book/issue-book.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'bookHome', component : BookHomeComponent},
  {path : 'issuedBookHome', component :IssuedBookHomeComponent },
  {path : 'studentHome', component : StudentHomeComponent},
  {path : 'newBook', component : NewBookComponent},
  {path : 'newStudent', component : NewStudentComponent},
  {path : 'editBook/:id', component : EditBookComponent},
  {path : 'editStudent/:id', component :EditStudentComponent },
  {path : 'editIssuedBook/:id', component :EditIssuedBookComponent },
  {path : 'studentDetail/:id', component:StudentDetailComponent},
  {path:'selectStudent/:id',component:SelectStudComponent},
  {path:'newbookIssue', component:IssueBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  BookHomeComponent, 
  IssuedBookHomeComponent,
  StudentHomeComponent,
  NewBookComponent, 
  NewStudentComponent,
  EditBookComponent,
  EditStudentComponent,
  EditIssuedBookComponent,
  StudentDetailComponent,
  SelectStudComponent,
  IssueBookComponent
];

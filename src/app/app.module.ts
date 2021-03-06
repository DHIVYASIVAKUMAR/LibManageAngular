import { MatDialog } from '@angular/material/dialog';
import { BookIssueServiceService } from './book-issue-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBookPublicationComponent } from './dialog-book-publication/dialog-book-publication.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,  
    NavBarComponent, DialogBookPublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  entryComponents :[DialogBookPublicationComponent],
  providers: [BookIssueServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

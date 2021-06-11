import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadAssignmentComponent } from './upload-assignment/upload-assignment.component';
import { DeleteAssignmentComponent } from './delete-assignment/delete-assignment.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { MarkAssignmentComponent } from './mark-assignment/mark-assignment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UploadAssignmentComponent,
    DeleteAssignmentComponent,
    SubmitAssignmentComponent,
    MarkAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

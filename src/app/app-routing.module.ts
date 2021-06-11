import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAssignmentComponent } from './delete-assignment/delete-assignment.component';
import { SubmitAssignmentComponent } from './submit-assignment/submit-assignment.component';
import { MarkAssignmentComponent } from './mark-assignment/mark-assignment.component';
import { UploadAssignmentComponent } from './upload-assignment/upload-assignment.component';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadAssignmentComponent,
  },
  {
    path: 'delete',
    component: DeleteAssignmentComponent,
  },
  {
    path: 'mark',
    component: MarkAssignmentComponent,
  },
  {
    path: 'submit',
    component: SubmitAssignmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

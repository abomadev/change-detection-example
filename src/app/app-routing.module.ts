import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'on-push', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

import { IdCardApprovalComponent } from './components/id-card-approval/id-card-approval.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: "", component: MainLayoutComponent },
  { path: "dashboard", component: MainLayoutComponent },
  { path: "login", component: LoginComponent },
  { path: "id-card-approval", component: IdCardApprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

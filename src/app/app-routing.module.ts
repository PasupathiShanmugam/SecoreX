import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { IdCardApprovalComponent } from './components/id-card-approval/id-card-approval.component';
import { LoginComponent } from './components/login/login.component';
import { DispatchComponent } from './components/dispatch/dispatch.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { IdCardIssueComponent } from './components/id-card-issue/id-card-issue.component';
import { CompletedQueueComponent } from './components/printing-queue/completed-queue/completed-queue.component';
import { PrintPipelineComponent } from './components/printing-queue/print-pipeline/print-pipeline.component';
import { PrintStatusComponent } from './components/printing-queue/print-status/print-status.component';
import { OdcAdminDashboardComponent } from './components/odc-admin/odc-admin-dashboard/odc-admin-dashboard.component';
import { OdcGrantRevokeAccessComponent } from './components/odc-admin/odc-grant-revoke-access/odc-grant-revoke-access.component';
import { OdcBulkUploadComponent } from './components/odc-admin/odc-bulk-upload/odc-bulk-upload.component';
import { OdcReportsComponent } from './components/odc-admin/odc-reports/odc-reports.component';
import { EmployeeLogsComponent } from './components/super-admin/employee-logs/employee-logs.component';
import { EmployeeOffBoardComponent } from './components/super-admin/employee-off-board/employee-off-board.component';
import { EmployeeIdCardRequestComponent } from './components/super-admin/employee-id-card-request/employee-id-card-request.component';
import { OdcAdminComponent } from './components/odc-admin/odc-admin.component';
import { MasterProfileConfigurationComponent } from './components/master-profile/master-profile-configuration/master-profile-configuration.component';
import { MasterProfileReportComponent } from './components/master-profile/master-profile-report/master-profile-report.component';
import { MasterProfileViewModifyComponent } from './components/master-profile/master-profile-view-modify/master-profile-view-modify.component';
import { MasterProfileAddComponent } from './components/master-profile/master-profile-add/master-profile-add.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      { path: "dashboard", component: DashboardComponent },
      { path: "id-card-approval", component: IdCardApprovalComponent },
      { path: "inbox", component: InboxComponent },
      { path: "card-issue", component: IdCardIssueComponent },
      { path: "dispatch", component: DispatchComponent },
      { path: "print-status", component: PrintStatusComponent },
      { path: "print-pipeline", component: PrintPipelineComponent },
      { path: "completed-queue", component: CompletedQueueComponent },
      { path: "odc-admin-dashboard", component: OdcAdminDashboardComponent },
      { path: "odc-grant-revoke", component: OdcGrantRevokeAccessComponent },
      { path: "odc-bulk-upload", component: OdcBulkUploadComponent },
      { path: "odc-reports", component: OdcReportsComponent },
      { path: "employee-logs", component: EmployeeLogsComponent },
      { path: "employee-off-board", component: EmployeeOffBoardComponent },
      { path: "employee-id-card-request", component: EmployeeIdCardRequestComponent },
      { path: "master-profile-add", component: MasterProfileAddComponent },
      { path: "master-profile-view", component: MasterProfileViewModifyComponent },
      { path: "master-profile-report", component: MasterProfileReportComponent },
      { path: "master-profile-configuration", component: MasterProfileConfigurationComponent },
      { path: "odc-admin", component: OdcAdminComponent },
    ]
  }
  // { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

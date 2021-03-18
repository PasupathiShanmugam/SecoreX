export const ROUTES = [

  {
    path: '#component', id: 'component', title: 'ID Card Admin', icon: 'apps', children: [
      { path: 'dashboard', title: 'Dashboard', icon: '', children: null },
      { path: 'id-card-approval', title: 'Id Card Approval', icon: 'IC' },
      {
        path: 'dispatch', title: 'Card Dispatch', icon: 'CD', children: [
          { path: 'dispatch', title: 'Dispatch', icon: '', children: null },
          { path: '/', title: 'Dispatched Cards', icon: 'IC' }
        ]
      },
      { path: 'card-issue', title: 'Card Issue', icon: 'CI' },
      { path: 'components/wizard', title: 'Payroll Deduction', icon: 'PD' },
      { path: 'components/wizard', title: 'Inbox', icon: 'I' },
      { path: 'components/wizard', title: 'Reports', icon: 'R' },
    ]
  },
  {
    path: '#print', id: 'print', title: 'Printing Queue', icon: 'apps', children: [
      { path: "print-status", title: 'Print Status', icon: 'CI' },
      { path: "print-pipeline", title: 'Print Pipeline', icon: 'PD' },
      { path: "completed-queue", title: 'Completed Queue', icon: 'PD' },
    ]
  },
  {
    path: '#odcAdmin', id: 'odcAdmin', title: 'ODC Admin', icon: 'apps', children: [
      { path: "odc-admin-dashboard", title: 'Dashboard', icon: 'CI' },
      { path: "odc-grant-revoke", title: 'Grant/Revoke Access', icon: 'CI' },
      { path: "odc-bulk-upload", title: 'Bulk  Upload', icon: 'CI' },
      { path: "odc-reports", title: 'ODC Reports', icon: 'CI' },
      { path: "odc-admin", title: 'ODC Admin', icon: 'CI' },
    ]
  },
  
  {
    path: '#super', id: 'super', title: 'Super Admin', icon: 'apps', children: [
      { path: "employee-logs", title: 'Employee Logs', icon: 'CI' ,children: null},
      { path: "employee-off-board", title: 'Employee Off board', icon: 'PD',children: null },
      { path: "completed-queue", title: 'Completed Queue', icon: 'PD',children: null },
      { path: "employee-id-card-request", title: 'Employee Id Card Request', icon: 'PD',children: null },
      {
        path: '#masterProfile', id: 'masterProfile', title: 'Master Profile', icon: 'apps', children: [
          { path: "master-profile-add", title: 'Add', icon: 'CI' },
          { path: "master-profile-view", title: 'View/Modify', icon: 'CI' },
          { path: "master-profile-report", title: 'Report', icon: 'CI' },
          { path: "master-profile-configuration", title: 'Configuration', icon: 'CI' }
        ]
      },
    ]
  },
  { path: '/odc-admin', title: 'Settings', icon: 'dashboard', children: null },
  { path: '/odc-admin', title: 'Logout', icon: 'dashboard', children: null },

];

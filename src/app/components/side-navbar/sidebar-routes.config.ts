export const ROUTES = [
   
    { path: '#component', id: 'component', title: 'ID Card Admin', icon: 'apps', children: [
      { path: '/dashboard', title: 'Dashboard', icon: '', children: null },
      {path: '/id-card-approval', title: 'Id Card Approval', icon: 'IC'},
      {path: 'components/panels', title: 'Card Dispatch', icon: 'CD'},
      {path: 'components/wizard', title: 'Card Issue', icon: 'CI'},
      {path: 'components/wizard', title: 'Payroll Deduction', icon: 'PD'},
      {path: 'components/wizard', title: 'Inbox', icon: 'I'},
      {path: 'components/wizard', title: 'Reports', icon: 'R'},
    ]},

    { path: '/odc-admin', title: 'Print Admin', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'ODC Admin', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'Super Admin', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'Settings', icon: 'dashboard', children: null },
    { path: '/odc-admin', title: 'Logout', icon: 'dashboard', children: null },
   
];

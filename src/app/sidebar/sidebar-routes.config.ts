export const ROUTES = [
    // { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'student', title: 'student', icon: 'person', children: null },
    // { path: 'supervisor', title: 'supervisor', icon: 'supervisor_account', children: null },
    { path: '#forms', id: 'forms', title: 'Forms', icon: 'apps', children: [
        {path: 'forms/formI1P1', title: 'Form I-1', icon: 'PT'},
        {path: 'forms/formI3', title: 'Form I-3', icon: 'I3'},
        {path: 'forms/form-i6', title: 'Form I-6', icon: 'I6'},
      ]},
    // { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    // { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    // { path: 'settings', title: 'Settings', icon: 'settings', children: null },
    { path: 'company', title: 'Company', icon: 'domain', children: null },  
    { path: '#formI3', id: 'formI3', title: 'Form I-3', icon: 'apps', children: [
            {path: 'internInfo', title: 'Intern Info', icon: 'PT'},
            {path: 'forms/formI3/dailyDiary', title: 'Dialy Diary', icon: 'PT'}
        ] },
    { path: 'profile', title: 'profile', icon: 'domain', children: null },
    { path: 'admin/viva-schedules', title: 'Viva Schedules', icon: 'account_box', children: null }
];
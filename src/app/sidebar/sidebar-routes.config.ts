export const ROUTES = [
    // { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'student', title: 'student', icon: 'person', children: null },
    // { path: 'supervisor', title: 'supervisor', icon: 'supervisor_account', children: null },
    {path: 'forms/formI1P1', title: 'Form I-1', icon: 'apps', children: null }, 
    
    {
        path: '#supervisor', id: 'supervisor', title: 'supervisor', icon: 'apps', children: [
            { path: 'forms/formI1P2', title: 'Form I-1', icon: 'DD' }
        ]
    },
        {path: 'forms/form-i6', title: 'Form I-6', icon: 'apps', children: null },
        { path: '#formI3', id: 'formI3', title: 'Form I-3', icon: 'apps', children: [
        {path: 'forms/formI3/internInfo', title: 'Intern Info', icon: 'II'},
        {path: 'forms/formI3/dailyDiary', title: 'Dialy Diary', icon: 'DD'},
        {path: 'forms/formI3/monthlyReport', title: 'Send Monthly Report', icon: 'MR'},
    ] },
    // { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    // { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    // { path: 'settings', title: 'Settings', icon: 'settings', children: null },
    { path: 'company', title: 'Company', icon: 'domain', children: null },

    { path: 'profile', title: 'profile', icon: 'domain', children: null },
    { path: 'admin/viva-schedules', title: 'Viva Schedules', icon: 'account_box', children: null },
    { path: 'supervisor', title: 'Supervisor', icon: 'account_circle', children: null }
];

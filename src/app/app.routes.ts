import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { StudentComponent } from './dashboard/student/student.component';
import { FormI6Component } from './dashboard/studentForms/form-i6/form-i6.component';
import { VivaSchedulesComponent } from './dashboard/viva-schedules/viva-schedules.component'
import { ScheduleComponent } from './dashboard/viva-schedules/schedule/schedule.component'
import { FormI1P1Component } from './dashboard/studentForms/form-i1-p1/form-i1-p1.component';
import { CompanyComponent }         from './dashboard/company/company.component';
import { FormI3Component } from './dashboard/studentForms/form-i3/form-i3.component';
import { DailyDiaryComponent } from './dashboard/studentForms/form-i3/daily-diary/daily-diary.component';
import { FormI1P2Component } from './dashboard/studentForms/form-i1-p2/form-i1-p2.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent},
    {path: 'student', component: StudentComponent},
    {path: 'forms/form-i6', component: FormI6Component},
    {path: 'admin/viva-schedules', component: VivaSchedulesComponent},
    {path: 'admin/viva-schedules/schedule', component: ScheduleComponent},
    {path: 'forms/formI1P1', component: FormI1P1Component},
    {path: 'forms/formI1P2', component: FormI1P2Component},
    {path: 'company', component: CompanyComponent},
    {path: 'forms/formI3', component: FormI3Component},
    {path: 'forms/formI3/internInfo', component: FormI3Component},
    {path: 'forms/formI3/internshipInfo', component: FormI3Component},
    {path: 'forms/formI3/dailyDiary', component: DailyDiaryComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);
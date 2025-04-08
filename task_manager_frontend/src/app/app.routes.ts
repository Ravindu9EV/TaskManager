import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'tasks',
    component: AllTasksComponent,
  },
  {
    path: 'search-task',
    component: SearchPageComponent,
  },
];

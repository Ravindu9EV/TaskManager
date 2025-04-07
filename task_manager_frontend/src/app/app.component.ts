import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    DashboardComponent,
    AddTaskFormComponent,
    LoginPageComponent,
    AllTasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task_manager_frontend';
}

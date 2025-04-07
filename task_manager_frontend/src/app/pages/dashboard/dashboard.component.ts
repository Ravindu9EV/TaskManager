import { Component } from '@angular/core';
import { AddTaskFormComponent } from '../../components/add-task-form/add-task-form.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Task } from '../../model/Task';
import { AllTasksComponent } from '../all-tasks/all-tasks.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    AddTaskFormComponent,
    NavbarComponent,
    RouterLink,
    AllTasksComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}

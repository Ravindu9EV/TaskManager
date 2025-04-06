import { Component } from '@angular/core';
import { AddTaskFormComponent } from '../../components/add-task-form/add-task-form.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [AddTaskFormComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}

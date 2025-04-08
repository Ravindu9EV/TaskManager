import { Component } from '@angular/core';
import { AddTaskFormComponent } from '../../components/add-task-form/add-task-form.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Task } from '../../model/Task';
import { AllTasksComponent } from '../all-tasks/all-tasks.component';
import { SearchPageComponent } from '../search-page/search-page.component';

@Component({
  selector: 'app-dashboard',
  imports: [AddTaskFormComponent, NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public newTask: Task | null = new Task(null, 'NUN', 'NUN', 'NUN', null);
  onFormClosed() {
    console.log('Form closed Event receved');

    this.newTask = new Task(null, 'NUN', 'NUN', 'NUN', null);
  }

  onTaskSaved() {
    // this.getTasks();
    this.newTask = null;
  }

  
}

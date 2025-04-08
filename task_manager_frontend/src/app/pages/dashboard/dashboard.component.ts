import { Component } from '@angular/core';
import { AddTaskFormComponent } from '../../components/add-task-form/add-task-form.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Task } from '../../model/Task';
import { AllTasksComponent } from '../all-tasks/all-tasks.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [
    AddTaskFormComponent,
    NavbarComponent,
    RouterLink,
    RouterOutlet,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public newTask: Task | null = new Task(null, 'NUN', 'NUN', 'NUN', null);
  public tsksToDo: Task[] = [];
  public tsksDoing: Task[] = [];
  public tsksDone: Task[] = [];
  public taskList: Task[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getTasks();
  }
  onFormClosed() {
    console.log('Form closed Event receved');

    this.newTask = new Task(null, 'NUN', 'NUN', 'NUN', null);
  }

  onTaskSaved() {
    // this.getTasks();
    this.newTask = null;
  }

  getTasks() {
    this.http
      .get<Task[]>('http://localhost:8080/task/all')
      .subscribe((data) => {
        data.forEach((tsk) => {
          //if (tsk.status === 'ToDo') {
          console.log('toDo');
          this.filterTasks(tsk)
          //}
        });
      });
    this.filterTasks;
  }

  filterTasks(t:Task) {
   // for (let t of this.taskList) {
      if (t.status === 'ToDo') {
        console.log(t);
        this.tsksToDo.push(t);
      } else if (t.status === 'Doing') {
        this.tsksDoing.push(t);
      } else if (t.status === 'Done') {
        this.tsksDone.push(t);
      }
    //}
    console.log(this.tsksToDo);
  }
}

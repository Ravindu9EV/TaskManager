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
import ts from 'typescript';

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
  public newTask: Task | null = new Task(null, '', '', '', null);
  public tsksToDo: Task[] = [];
  public tsksDoing: Task[] = [];
  public tsksDone: Task[] = [];
  public taskList: Task[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getTasks();
    console.log(this.tsksDone);
  }
  onFormClosed() {
    console.log('Form closed Event receved');

    this.newTask = new Task(null, '', '', '', null);
  }

  onTaskSaved() {
    this.getTasks();
    this.newTask = new Task(null, '', '', '', null);
  }

  getTasks() {
    this.http
      .get<Task[]>('http://localhost:8080/task/all')
      .subscribe((data) => {
        data.forEach((tsk) => {
          //if (tsk.status === 'ToDo') {
          console.log(tsk);
          this.filterTasks(tsk);
        });
      });
    this.filterTasks;
  }

  filterTasks(t: Task) {
    // for (let t of this.taskList) {
    if (t.status === 'To Do') {
      console.log(t, 'Push');
      this.tsksToDo.push(t);
    } else if (t.status === 'Doing') {
      this.tsksDoing.push(t);
    } else {
      this.tsksDone.push(t);
    }
    //}
    console.log(this.tsksToDo);
  }
  hideModalTsk() {
    const modTsk = document.getElementById('taskModal') as HTMLElement;
    modTsk.style.display = 'none';
  }

  editTask(tsk: Task) {
    this.newTask = tsk;
    this.filterTasks(tsk);
    this.removeFromList(tsk);
  }

  removeFromList(tsk: Task) {
    if (tsk.status === 'To Do') {
      const index = this.tsksToDo.findIndex((t) => t.id === tsk.id);

      if (index > 0) {
        this.tsksToDo.splice(index, 1);
        this.getTasks();
      }
    }
  }

  deleteTask(tsk: Task) {
    if (tsk.id) {
      this.http
        .delete(`http://localhost:8080/task/delete/${tsk.id}`)
        .subscribe((data) => {
          if (data) {
            alert('Deleted Successfully');
            this.removeFromList(tsk);
            this.getTasks();
          }
        });
    }
  }
}

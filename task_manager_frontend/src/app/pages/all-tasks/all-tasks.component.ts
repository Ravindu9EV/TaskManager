import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/Task';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskFormComponent } from '../../components/add-task-form/add-task-form.component';

@Component({
  selector: 'app-all-tasks',
  imports: [CommonModule, FormsModule, AddTaskFormComponent],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css',
})
export class AllTasksComponent {
  constructor(private http: HttpClient) {
    this.getTasks();
  }

  // public newTask: any | null = {
  //   id: null,
  //   title: '',
  //   description: '',
  //   status: '',
  //   createdAt: null,
  // };

  public newTask: any | null = null;
  public tasks: Task[] = [];
  private url = 'http://localhost:8080/task/';
  getTasks() {
    this.http.get<Task[]>(this.url + 'all').subscribe((data) => {
      this.tasks = data;
    });
  }

  deleteTask(id: number) {
    this.http.delete<boolean>(this.url + 'delete/' + id).subscribe((data) => {
      alert('Deleted Success!');
      this.getTasks();
    });
  }

  editTask(task: Task | null) {
    if (task) {
      this.newTask = { ...task };
    }
  }

  onTaskSaved() {
    this.getTasks();
    this.newTask = null;
  }

  onFormClosed() {
    console.log('Form closed Event receved');

    this.newTask = null;
  }
}

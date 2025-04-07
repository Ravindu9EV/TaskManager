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
  ngOnInit() {
    this.hideModalTsk();
  }
  // public newTask: any | null = {
  //   id: null,
  //   title: '',
  //   description: '',
  //   status: '',
  //   createdAt: null,
  // };

  public newTask: Task | null = new Task(null, 'NUN', 'NUN', 'NUN', null);
  public tasks: Task[] = [];
  private url = 'http://localhost:8080/task/';

  public showTask: any | null = {
    id: null,
    title: '',
    description: '',
    status: '',
    createdAt: null,
  };

  // --------------get Tasks--------------
  getTasks() {
    this.http.get<Task[]>(this.url + 'all').subscribe((data) => {
      this.tasks = data;
    });
  }

  // --search Task----------------
  public txtId: number = 0;

  //---------------set searchId------

  searchTask(id: number) {
    console.log(id);

    this.http.get<Task>(this.url + 'find/' + id).subscribe((data) => {
      this.showTask = data;
    });
  }
  getSearchID() {
    const searchInp = document.getElementById('txtSearch') as HTMLInputElement;
    if (searchInp) {
      this.txtId = parseInt(searchInp?.value || '0');
      this.searchTask(this.txtId);
      this.showModalTsk();
    } else {
      alert('error');
    }
  }

  // -----------Delete Task-----------
  deleteTask(id: number) {
    if (id) {
      this.http.delete<boolean>(this.url + 'delete/' + id).subscribe((data) => {
        alert('Deleted Success!');
        this.getTasks();
      });
    }
  }

  editTask(task: Task | null) {
    if (task) {
      this.newTask = new Task(
        task.id,
        task.title,
        task.description,
        task.status,
        task.createdAt
      );
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

  //--set task card for display--
  setHowtask(showTsk: Task) {
    this.showTask = showTsk;
  }

  // -hide modal--
  hideModalTsk() {
    const modTsk = document.getElementById('taskModal') as HTMLElement;
    modTsk.style.display = 'none';
  }

  showModalTsk() {
    const modTsk = document.getElementById('taskModal') as HTMLElement;
    modTsk.style.display = 'flex';
  }
}

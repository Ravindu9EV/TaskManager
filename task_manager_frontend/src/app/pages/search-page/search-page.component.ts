import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Task } from '../../model/Task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import ts from 'typescript';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  ngOnInit() {
    setTimeout(() => this.hideModalTsk(), 100);
  }
  constructor(private http: HttpClient) {
    this.f();
  }

  public showTask: Task = new Task(null, '', '', '', null);

  //---------------set searchId------

  public txtId: number = 0;

  searchTask(id: number) {
    if (id) {
      this.http
        .get<Task>(`http://localhost:8080/task/find/${id}`, {
          headers: { 'Content-Type': 'application/json' },
        })
        .subscribe((data) => {
          // this.showTask = data;
          if (data) {
            this.setShowtask(data);
            console.log(data);
          }
        });
    }
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

  // -hide modal--
  hideModalTsk() {
    const modTsk = document.getElementById('taskModal') as HTMLElement;
    if (modTsk) {
      modTsk.style.display = 'none';
    }
  }

  showModalTsk() {
    const modTsk = document.getElementById('taskModal') as HTMLElement;
    if (modTsk) {
      modTsk.style.display = 'flex';
    }
  }
  //--set task card for display--
  setShowtask(tsk: Task) {
    // if (
    //   this.showTask?.getTitle() != null &&
    //   this.showTask?.getDiscription() != null &&
    //   this.showTask?.getStatus()
    // ) {
    //   this.showTask = tsk;
    // }
    if (tsk) {
      console.log(tsk);

      this.showTask = tsk;
    }
  }

  f() {
    this.http
      .get<Task>(`http://localhost:8080/task/find/52`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

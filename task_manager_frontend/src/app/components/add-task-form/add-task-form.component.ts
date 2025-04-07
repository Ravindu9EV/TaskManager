import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-task-form',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css',
})
export class AddTaskFormComponent {
  @Input() task: any = {
    id: null,
    title: '',
    description: '',
    status: '',
    createdAt: null,
  };
  @Output() taskSaved = new EventEmitter<void>();
  @Output() formClosed = new EventEmitter<void>();
  constructor(private http: HttpClient) {}
  // public task: any = {
  //   id: null,
  //   title: '',
  //   description: '',
  //   status: '',
  //   createdAt: null,
  // };

  private url = 'http://localhost:8080/task/';
  saveTask() {
    if (
      this.task.title != '' &&
      this.task.description != '' &&
      this.task.status != ''
    ) {
      if (this.task.id) {
        this.http
          .put<boolean>(this.url + `edit`, this.task)
          .subscribe((data) => {
            alert('Task Updated Successfully!');
            this.taskSaved.emit();
          });
        console.log('done');
      } else {
        this.http
          .post<boolean>(this.url + 'add', this.task)
          .subscribe((data) => {
            alert('Task Added Successfully!');
            this.taskSaved.emit();
          });
        console.log('done');
      }
    }
  }

  closeForm() {
    console.log('Close button clicked');

    this.formClosed.emit();
  }
}

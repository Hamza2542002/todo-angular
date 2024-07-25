import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../main-loayout/main-loayout.component';
import { stat } from 'fs';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() showForm!: boolean;
  @Input() task!: Task;
  @Output() taskCreated = new EventEmitter<Task>();
  name = '';
  description = '';
  date: string = '';
  time: string = '';
  status: boolean = false;

  addTask(e: Event) {
    e.preventDefault();
    if (!this.name || !this.date || !this.time) return;
    const task: Task = {
      id: new Date().toLocaleString(),
      name: this.name,
      description: this.description,
      date: this.getDate(this.date),
      time: this.time,
      status: this.status,
    };
    this.taskCreated.emit(task);
    this.name = '';
    this.description = '';
    this.date = '';
    this.time = '';
    this.status = false;
    this.closeForm();
  }
  closeForm() {
    this.showForm = false;
  }
  getDate(date: string) {
    let [month, day, year] = [...date.split('/')];
    console.log([month, day, year]);
    return [month, day, year].at(0) || '';
  }

  close() {
    this.showForm = false;
  }
}

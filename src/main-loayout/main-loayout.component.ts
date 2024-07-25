import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { FormComponent } from '../form/form.component';
import { CommonModule } from '@angular/common';
import { SelectedTaskComponent } from '../selected-task/selected-task.component';

export type Task = {
  name: string;
  description: string;
  date: string;
  time: string;
  id: string;
  status: boolean;
};

@Component({
  selector: 'app-main-loayout',
  standalone: true,
  imports: [TaskComponent, FormComponent, CommonModule, SelectedTaskComponent],
  templateUrl: './main-loayout.component.html',
  styleUrl: './main-loayout.component.scss',
})
export class MainLoayoutComponent {
  showForm: boolean = false;
  showTask: boolean = false;
  @ViewChild('form') myElement!: ElementRef;
  selectedTask!: Task;
  tasks: Task[] = [];

  constructor() {
    if (typeof window !== 'undefined' && localStorage.getItem('tasks'))
      this.tasks = JSON.parse(localStorage.getItem('tasks') || '') || [];
  }

  onTaskCreated(task: Task) {
    this.tasks.push(task);
    this.savetoLoacalStorage(this.tasks);
    this.showForm = false;
  }

  onTaskEdited(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id == task.id ? task : t));
    this.savetoLoacalStorage(this.tasks);
    this.closeModal();
  }

  onTaskDeleted(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.savetoLoacalStorage(this.tasks);
    this.closeModal();
  }

  selectTask(task: Task) {
    this.selectedTask = task;
    this.showTask = true;
  }

  closeModal() {
    this.showTask = false;
  }

  savetoLoacalStorage(items: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(items));
  }

  handleClick(e: Event) {
    console.log(e.target);
    console.log(this.myElement);
  }
}

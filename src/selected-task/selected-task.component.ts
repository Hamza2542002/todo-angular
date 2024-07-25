import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../main-loayout/main-loayout.component';

@Component({
  selector: 'app-selected-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selected-task.component.html',
  styleUrl: './selected-task.component.scss',
})
export class SelectedTaskComponent {
  @Input() task!: Task;
  @Input() showTask: boolean = false;
  @Output() taskEdited = new EventEmitter<Task>();
  @Output() deletedId = new EventEmitter<string>();

  edit() {
    const task = {
      id: this.task.id,
      name: this.task.name,
      description: this.task.description,
      date: this.task.date,
      time: this.task.time,
      status: this.task.status,
    };
    this.taskEdited.emit(task);
    this.close();
  }
  delete() {
    this.deletedId.emit(this.task.id);
  }

  close() {
    this.showTask = false;
  }
}

import { Component, Input } from '@angular/core';
import { Task } from '../main-loayout/main-loayout.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task!: Task;
}

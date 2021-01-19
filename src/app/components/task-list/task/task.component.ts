import { Task } from './../../../interfaces/task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;

  @Output() remove: EventEmitter<number>;
  @Output() complete: EventEmitter<number>;

  constructor() {
    this.remove = new EventEmitter<number>();
    this.complete = new EventEmitter<number>();
  }

  ngOnInit(): void {

  }

  taskChecked() {
    this.complete.emit(this.index);
  }

  taskRemoved() {
    this.remove.emit(this.index);
  }

}

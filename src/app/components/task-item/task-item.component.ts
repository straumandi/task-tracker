import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //EventEmitter basic instruction
  //1. declare EventEmitter Variable with @Output so the parent can receive it
  //2. define function when EventEmitter should fire off (here onDelete() with task as param)
  //3. define in parent(tasks) which function should be called when event has been emittet
    
  //The @Input() decorator in a child component or directive signifies, 
  //that the property can receive its value from its parent component(tasks.component)
  @Input() task?: Task;
  //@Output signifies that the property can pass its value to it's parent component(tasks.component)
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();

  
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }


}

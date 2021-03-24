import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-board-work-item',
  templateUrl: './task-board-work-item.component.html',
  styleUrls: ['./task-board-work-item.component.scss']
})
export class TaskBoardWorkItemComponent implements OnInit {

  @Input()
  usersData: any;

  @Input()
  priorityData: any;

  @Input()
  resourceData: any;

  @Output()
  dataChangeEvent = new EventEmitter();

  @Output()
  openDialogToUpdateDataEvent = new EventEmitter();

  @Output()
  openDialogToAddTaskEvent = new EventEmitter();

  @Output()
  openDialogToAddBugEvent = new EventEmitter();

  @Output()
  removeUserStoryEvent = new EventEmitter();

  @Output()
  removeTaskorBugEvent = new EventEmitter();

  constructor() { }

  dataChanged() {
    this.dataChangeEvent.emit("valueChanged");
  }

  openDialogToUpdateData()
  {
    this.openDialogToUpdateDataEvent.emit(this.resourceData);
  }

  openDialogToAddTask()
  {
    this.openDialogToAddTaskEvent.emit(this.resourceData);
  }
  openDialogToAddBug()
  {
    this.openDialogToAddBugEvent.emit(this.resourceData);
  }

  removeUserStory()
  {
    this.removeUserStoryEvent.emit(this.resourceData);
  }

  removeTaskOrBug()
  {
    this.removeTaskorBugEvent.emit(this.resourceData);
  }

  ngOnInit(): void {

  }
}

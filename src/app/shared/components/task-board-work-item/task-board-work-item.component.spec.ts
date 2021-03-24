import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoardWorkItemComponent } from './task-board-work-item.component';

describe('TaskBoardWorkItemComponent', () => {
  let component: TaskBoardWorkItemComponent;
  let fixture: ComponentFixture<TaskBoardWorkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBoardWorkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardWorkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

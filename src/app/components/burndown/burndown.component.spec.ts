import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { burndownComponent } from './burndown.component';

describe('burndownComponent', () => {
  let component: burndownComponent;
  let fixture: ComponentFixture<burndownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ burndownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(burndownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

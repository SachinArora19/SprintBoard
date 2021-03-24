import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMainTextComponent } from './shared-main-text.component';

describe('SharedMainTextComponent', () => {
  let component: SharedMainTextComponent;
  let fixture: ComponentFixture<SharedMainTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedMainTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

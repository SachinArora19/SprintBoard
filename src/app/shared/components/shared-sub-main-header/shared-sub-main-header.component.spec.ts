import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSubMainHeaderComponent } from './shared-sub-main-header.component';

describe('SharedSubMainHeaderComponent', () => {
  let component: SharedSubMainHeaderComponent;
  let fixture: ComponentFixture<SharedSubMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSubMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSubMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

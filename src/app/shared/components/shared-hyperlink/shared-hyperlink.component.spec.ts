import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHyperlinkComponent } from './shared-hyperlink.component';

describe('SharedHyperlinkComponent', () => {
  let component: SharedHyperlinkComponent;
  let fixture: ComponentFixture<SharedHyperlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedHyperlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHyperlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

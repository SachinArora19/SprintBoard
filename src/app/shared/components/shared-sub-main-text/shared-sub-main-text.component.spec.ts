import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSubMainTextComponent } from './shared-sub-main-text.component';

describe('SharedSubMainTextComponent', () => {
  let component: SharedSubMainTextComponent;
  let fixture: ComponentFixture<SharedSubMainTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSubMainTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSubMainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

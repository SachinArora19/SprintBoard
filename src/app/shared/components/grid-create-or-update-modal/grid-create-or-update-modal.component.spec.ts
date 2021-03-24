import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCreateOrUpdateModalComponent } from './grid-create-or-update-modal.component';

describe('GridCreateOrUpdateModalComponent', () => {
  let component: GridCreateOrUpdateModalComponent;
  let fixture: ComponentFixture<GridCreateOrUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCreateOrUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCreateOrUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

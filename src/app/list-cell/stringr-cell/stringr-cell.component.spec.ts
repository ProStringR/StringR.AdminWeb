import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringrCellComponent } from './stringr-cell.component';

describe('StringrCellComponent', () => {
  let component: StringrCellComponent;
  let fixture: ComponentFixture<StringrCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringrCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringrCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

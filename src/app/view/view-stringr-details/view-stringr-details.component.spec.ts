import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStringrDetailsComponent } from './view-stringr-details.component';

describe('ViewStringrDetailsComponent', () => {
  let component: ViewStringrDetailsComponent;
  let fixture: ComponentFixture<ViewStringrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStringrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStringrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

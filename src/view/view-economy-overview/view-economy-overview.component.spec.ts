import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEconomyOverviewComponent } from './view-economy-overview.component';

describe('ViewEconomyOverviewComponent', () => {
  let component: ViewEconomyOverviewComponent;
  let fixture: ComponentFixture<ViewEconomyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEconomyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEconomyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

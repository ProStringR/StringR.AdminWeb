import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyGraphComponent } from './economy-graph.component';

describe('EconomyGraphComponent', () => {
  let component: EconomyGraphComponent;
  let fixture: ComponentFixture<EconomyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationStatisticComponent } from './population-statistic.component';

describe('PopulationStatisticComponent', () => {
  let component: PopulationStatisticComponent;
  let fixture: ComponentFixture<PopulationStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

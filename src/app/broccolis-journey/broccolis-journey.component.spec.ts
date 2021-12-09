import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroccolisJourneyComponent } from './broccolis-journey.component';

describe('BroccolisJourneyComponent', () => {
  let component: BroccolisJourneyComponent;
  let fixture: ComponentFixture<BroccolisJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroccolisJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroccolisJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

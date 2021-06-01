import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideVisualizerComponent } from './guide-visualizer.component';

describe('GuideVisualizerComponent', () => {
  let component: GuideVisualizerComponent;
  let fixture: ComponentFixture<GuideVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

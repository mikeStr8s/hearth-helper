import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideBuilderComponent } from './guide-builder.component';

describe('GuideBuilderComponent', () => {
  let component: GuideBuilderComponent;
  let fixture: ComponentFixture<GuideBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

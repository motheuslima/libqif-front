import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabComponent } from './probab.component';

describe('ProbabComponent', () => {
  let component: ProbabComponent;
  let fixture: ComponentFixture<ProbabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

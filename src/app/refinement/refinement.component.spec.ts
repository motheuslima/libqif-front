import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinementComponent } from './refinement.component';

describe('RefinementComponent', () => {
  let component: RefinementComponent;
  let fixture: ComponentFixture<RefinementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefinementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

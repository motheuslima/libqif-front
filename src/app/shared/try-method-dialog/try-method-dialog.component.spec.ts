import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryMethodDialogComponent } from './try-method-dialog.component';

describe('TryMethodDialogComponent', () => {
  let component: TryMethodDialogComponent;
  let fixture: ComponentFixture<TryMethodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryMethodDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryMethodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopinhoDatepickerComponent } from './lopinho-datepicker.component';

describe('LopinhoDatepickerComponent', () => {
  let component: LopinhoDatepickerComponent;
  let fixture: ComponentFixture<LopinhoDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopinhoDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopinhoDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

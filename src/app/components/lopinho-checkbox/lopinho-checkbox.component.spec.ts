import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopinhoCheckboxComponent } from './lopinho-checkbox.component';

describe('LopinhoCheckboxComponent', () => {
  let component: LopinhoCheckboxComponent;
  let fixture: ComponentFixture<LopinhoCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopinhoCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopinhoCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

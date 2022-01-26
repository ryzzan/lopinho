import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopinhoSelectComponent } from './lopinho-select.component';

describe('LopinhoSelectComponent', () => {
  let component: LopinhoSelectComponent;
  let fixture: ComponentFixture<LopinhoSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopinhoSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopinhoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

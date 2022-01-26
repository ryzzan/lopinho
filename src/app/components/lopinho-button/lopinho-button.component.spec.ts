import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopinhoButtonComponent } from './lopinho-button.component';

describe('LopinhoButtonComponent', () => {
  let component: LopinhoButtonComponent;
  let fixture: ComponentFixture<LopinhoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopinhoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopinhoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

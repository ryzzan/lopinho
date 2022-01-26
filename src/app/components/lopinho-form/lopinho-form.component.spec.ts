import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopinhoFormComponent } from './lopinho-form.component';

describe('LopinhoFormComponent', () => {
  let component: LopinhoFormComponent;
  let fixture: ComponentFixture<LopinhoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopinhoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopinhoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

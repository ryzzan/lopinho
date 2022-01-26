import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopinhoAutocompleteComponent } from './lopinho-autocomplete.component';

describe('LopinhoAutocompleteComponent', () => {
  let component: LopinhoAutocompleteComponent;
  let fixture: ComponentFixture<LopinhoAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopinhoAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LopinhoAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

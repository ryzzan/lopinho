import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'lopinho-autocomplete',
  templateUrl: './lopinho-autocomplete.component.html',
  styleUrls: ['./lopinho-autocomplete.component.sass']
})
export class LopinhoAutocompleteComponent implements OnInit {

  text = 'Autocomplete label';
  placeholder = 'Autocomplete placeholder'
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  ngOnInit(): void {  
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}

import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'lopinho-select',
  templateUrl: './lopinho-select.component.html',
  styleUrls: ['./lopinho-select.component.sass']
})
export class LopinhoSelectComponent implements OnInit {
  label = 'Select label';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

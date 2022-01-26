import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lopinho-datepicker',
  templateUrl: './lopinho-datepicker.component.html',
  styleUrls: ['./lopinho-datepicker.component.sass']
})
export class LopinhoDatepickerComponent implements OnInit {

  label = 'Escolha uma data';

  constructor() { }

  ngOnInit(): void {
  }

}

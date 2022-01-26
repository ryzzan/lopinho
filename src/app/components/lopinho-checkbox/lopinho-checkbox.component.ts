import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lopinho-checkbox',
  templateUrl: './lopinho-checkbox.component.html',
  styleUrls: ['./lopinho-checkbox.component.sass']
})
export class LopinhoCheckboxComponent implements OnInit {

  label = 'Check me!';
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lopinho-form',
  templateUrl: './lopinho-form.component.html',
  styleUrls: ['./lopinho-form.component.sass']
})
export class LopinhoFormComponent implements OnInit {

  label = 'Input label';
  placeholder = 'Input placeholder';

  constructor() { }

  ngOnInit(): void {
  }

}

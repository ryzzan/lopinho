import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lopinho-button',
  templateUrl: './lopinho-button.component.html',
  styleUrls: ['./lopinho-button.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LopinhoButtonComponent {

  @Input() color: 'primary' | 'accent' | 'warn' | undefined;
  @Input() label = 'Button';
  @Output() buttonClick = new EventEmitter();

  constructor() {

  }

  onClick() {
    this.buttonClick.emit();
  }

}

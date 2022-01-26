import { MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  moduleMetadata,
  Meta,
  Story
} from '@storybook/angular';
import {
  LopinhoDatepickerComponent
} from 'src/app/components/lopinho-datepicker/lopinho-datepicker.component';

export default {
  title: 'Lopinho Datepicker',
  component: LopinhoDatepickerComponent,
  decorators: [
    moduleMetadata({
      declarations: [LopinhoDatepickerComponent],
      imports: [MatDatepickerModule, MatNativeDateModule, MatInputModule]
    })
  ]
} as Meta;

export const Primary: Story = () => ({
  props: {
    primary: true,
  },
})

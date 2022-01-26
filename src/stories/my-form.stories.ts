import {
  MatFormFieldModule
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  moduleMetadata,
  Meta,
  Story
} from '@storybook/angular';
import {
  LopinhoFormComponent
} from 'src/app/components/lopinho-form/lopinho-form.component';

export default {
  title: 'Lopinho Form',
  component: LopinhoFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [LopinhoFormComponent],
      imports: [MatFormFieldModule, MatInputModule]
    })
  ]
} as Meta;

export const Primary: Story = () => ({
  props: {
    primary: true,
  },
})
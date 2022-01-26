import { MatButtonModule } from '@angular/material/button';
import {
  moduleMetadata,
  Meta,
  Story
} from '@storybook/angular';
import {
  LopinhoButtonComponent
} from '../app/components/lopinho-button/lopinho-button.component';

export default {
  title: 'Lopinho Button',
  component: LopinhoButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [LopinhoButtonComponent],
      imports: [MatButtonModule]
    })
  ]
} as Meta;

export const Primary: Story = () => ({
  props: {
    primary: true,
  },
})

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/MRIfQwwZMOcCsKuJjgDzuS/Arquivo-Principal---Angular-Material?node-id=1523%3A2402'
  }
}
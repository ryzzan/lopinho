import {
  MatInputModule
} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  moduleMetadata,
  Meta,
  Story
} from '@storybook/angular';
import {
  LopinhoSelectComponent
} from 'src/app/components/lopinho-select/lopinho-select.component';

export default {
  title: 'Lopinho Select',
  component: LopinhoSelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [LopinhoSelectComponent],
      imports: [MatSelectModule, MatInputModule]
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
    url: 'https://www.figma.com/file/MRIfQwwZMOcCsKuJjgDzuS/Arquivo-Principal---Angular-Material?node-id=69%3A1014'
  }
}
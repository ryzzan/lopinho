import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  moduleMetadata,
  Meta,
  Story
} from '@storybook/angular';
import { 
    LopinhoCheckboxComponent
} from 'src/app/components/lopinho-checkbox/lopinho-checkbox.component';

export default {
  title: 'Lopinho Checkbox',
  component: LopinhoCheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [LopinhoCheckboxComponent],
      imports: [MatCheckboxModule]
    })
  ]
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: 'Checkbox',
    primary: true,
  },
})

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/MRIfQwwZMOcCsKuJjgDzuS/Arquivo-Principal---Angular-Material?node-id=1054%3A2992'
  }
}

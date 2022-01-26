import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {
  moduleMetadata,
  Meta,
  Story
} from '@storybook/angular';
import { 
    LopinhoAutocompleteComponent 
} from 'src/app/components/lopinho-autocomplete/lopinho-autocomplete.component';

export default {
  title: 'Lopinho Autocomplete',
  component: LopinhoAutocompleteComponent,
  decorators: [
    moduleMetadata({
      declarations: [LopinhoAutocompleteComponent],
      imports: [MatAutocompleteModule, MatInputModule]
    })
  ]
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: 'Autocomplete',
    primary: true,
  },
})

import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { LopinhoAutocompleteComponent } from './components/lopinho-autocomplete/lopinho-autocomplete.component';
import { AuthenticationGuard } from './guards/authentication.guard';

//Modules

const routes: Routes = [{
    path: 'main',
    // canActivate: [AuthenticationGuard],
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'lopinho-autocomplete',
    component: LopinhoAutocompleteComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

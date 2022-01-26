import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/** My modules */
import { SharedModule } from './modules/shared/shared.module';

/** Utils */
import { MyErrorHandler } from '../utils/error-handler';

/** Components */
import { AppComponent } from './app.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog/logout-confirmation-dialog.component';
import { RemoveConfirmationDialogComponent } from './components/remove-confirmation-dialog/remove-confirmation-dialog.component';
import { AuthenticationGuard } from './guards/authentication.guard';

/**
 * Pipes
 */
import { ObjectArrayToStringPipe } from './pipes/object-array-to-string.pipe';
import { LopinhoButtonComponent } from './components/lopinho-button/lopinho-button.component';
import { LopinhoAutocompleteComponent } from './components/lopinho-autocomplete/lopinho-autocomplete.component';
import { LopinhoCheckboxComponent } from './components/lopinho-checkbox/lopinho-checkbox.component';
import { LopinhoDatepickerComponent } from './components/lopinho-datepicker/lopinho-datepicker.component';
import { LopinhoFormComponent } from './components/lopinho-form/lopinho-form.component';
import { LopinhoSelectComponent } from './components/lopinho-select/lopinho-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutConfirmationDialogComponent,
    RemoveConfirmationDialogComponent,
    ObjectArrayToStringPipe,
    LopinhoButtonComponent,
    LopinhoAutocompleteComponent,
    LopinhoCheckboxComponent,
    LopinhoDatepickerComponent,
    LopinhoFormComponent,
    LopinhoSelectComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthenticationGuard,
    MyErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

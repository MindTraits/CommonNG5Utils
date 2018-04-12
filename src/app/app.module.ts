import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,
         MatCheckboxModule,
         MatIconModule,
         MatAutocompleteModule,
         MatToolbarModule,
         MatFormFieldModule,
         MatInputModule,
         MatSlideToggleModule,
         MatSidenavModule
      } from '@angular/material';


import { AppComponent } from './app.component';
import { CountryComponentComponent } from './country-component/country-component.component';
import { CountryDirectiveDirective } from './country-component/country-directive.directive';
import { CountryServiceService } from './country-component/country-service.service';



@NgModule({
  declarations: [
    AppComponent,
    CountryComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSidenavModule
  ],
  providers: [CountryServiceService, CountryDirectiveDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }

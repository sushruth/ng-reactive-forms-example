import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormDataService } from './services/index';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ImmigrationFormComponent } from './components/';


@NgModule({
  declarations: [
    AppComponent,
    ImmigrationFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    FormDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsComponent }  from './forms/forms.component';
import { MyChangeDirective } from './change.dirctive';

@NgModule({
  imports:      [ BrowserModule , ],
  declarations: [ AppComponent ,FormsComponent,MyChangeDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

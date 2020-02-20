import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Division2BuilderModule } from './division2-builder/division2-builder.module'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, Division2BuilderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

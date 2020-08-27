import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { Ejer1Component } from './components/ejer1/ejer1.component';
import { Ejer2Component } from './components/ejer2/ejer2.component';
//Rutas
import { APP_ROUTING } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    Ejer1Component,
    Ejer2Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

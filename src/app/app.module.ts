import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AmigosComponent } from './amigos/amigos.component';
import { FormsModule } from '@angular/forms';
import { ComprasComponent } from './compras/compras.component';


@NgModule({
  declarations: [
    AppComponent,
    AmigosComponent,
    AmigosComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

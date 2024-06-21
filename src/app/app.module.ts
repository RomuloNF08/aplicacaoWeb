import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [
    provideHttpClient()
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }


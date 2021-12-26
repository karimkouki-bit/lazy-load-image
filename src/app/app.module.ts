import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HopmeComponent } from './hopme/hopme.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  declarations: [
    AppComponent,
    HopmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

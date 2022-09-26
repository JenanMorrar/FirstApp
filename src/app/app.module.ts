import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import {GifsService} from "./gifs.service";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GifsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

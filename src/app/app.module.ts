import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MainPageComponent} from './mainpage.component';
import {PageNotFoundComponent} from './pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, MainPageComponent,PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

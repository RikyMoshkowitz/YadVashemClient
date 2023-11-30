import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule  } from "./material.module";


import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { OrderManagerComponent } from './Coponents/order-manager/order-manager.component';
import { HomeComponent } from './Coponents/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderManagerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule ,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

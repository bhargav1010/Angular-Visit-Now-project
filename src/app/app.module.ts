import { NgModule,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TirupatiComponent} from 'src/app/tirupati/tirupati.component'
import {VijayawadaComponent} from 'src/app/vijayawada/vijayawada.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './auth/register/register.component';
import {AuthModule} from 'src/app/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    VijayawadaComponent,
    TirupatiComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {}
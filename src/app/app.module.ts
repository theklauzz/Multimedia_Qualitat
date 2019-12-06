import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Component} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HitocomComponent } from './hitocom/hitocom.component';
import { HitoformComponent } from './hitoform/hitoform.component';
import { AnuncioHomeComponent } from './anuncio-home/anuncio-home.component';
import { AnuncioFormComponent } from './anuncio-form/anuncio-form.component';
import { PrincipalComponent } from './principal/principal.component';
import { Clock2Component } from './clock2/clock2.component';
import { RelojService } from './services/reloj.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    HitocomComponent,
    HitoformComponent,
    AnuncioHomeComponent,
    AnuncioFormComponent,
    PrincipalComponent,
    Clock2Component,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RelojService],
  bootstrap: [AppComponent]
})
export class AppModule { }

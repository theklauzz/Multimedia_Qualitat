import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HitocomComponent } from './hitocom/hitocom.component';
import { HitoformComponent } from './hitoform/hitoform.component';
import { AnuncioHomeComponent } from './anuncio-home/anuncio-home.component';
import { AnuncioFormComponent } from './anuncio-form/anuncio-form.component';
import { PrincipalComponent } from './principal/principal.component';
import { Clock2Component } from './clock2/clock2.component';



const routes: Routes = [
  {path: '',component: PrincipalComponent},
  {path: 'home',component: HomeComponent},
  {path: 'form',component: FormComponent},
  {path: 'form/:id',component: FormComponent},
 {path:'hito',component: HitocomComponent },
 {path:'hitoform',component: HitoformComponent },
 {path:'hitoform/:id',component: HitoformComponent },
{path:'anuncio',component: AnuncioHomeComponent },
{path:'anuncioform',component: AnuncioFormComponent },
{path:'anuncioform/:id',component:  AnuncioFormComponent},
{path:'pantalla',component:  PrincipalComponent},
{path:'reloj',component:  Clock2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

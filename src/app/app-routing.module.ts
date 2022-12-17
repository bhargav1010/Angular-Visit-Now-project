import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TirupatiComponent } from './tirupati/tirupati.component';
import { VijayawadaComponent } from './vijayawada/vijayawada.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'tirupati',component:TirupatiComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

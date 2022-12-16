import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TirupatiComponent } from './tirupati/tirupati.component';
import { VijayawadaComponent } from './vijayawada/vijayawada.component';

const routes: Routes = [
  {path:'',component:TirupatiComponent},
  {path:'tirupati',component:TirupatiComponent},

  {path:'vijayawada',component:VijayawadaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

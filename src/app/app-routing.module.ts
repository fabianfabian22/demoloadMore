import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: 'user', loadChildren: () => import('../app/user/user.module').then(m => m.UserModule) },
  { path: '', redirectTo: 'user', pathMatch: 'full' },

  { path: 'house', loadChildren: () => import('./house/house.module').then(m => m.HouseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

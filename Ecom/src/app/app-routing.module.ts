import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>DashboardModule)
  },
  {
    path: 'login-registration',
    loadChildren: () => import('./login-module/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersInfoComponent } from './followers-info/followers-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'user/:login/followers',
    component: FollowersInfoComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

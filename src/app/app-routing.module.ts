import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user-profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user-profile.module').then(mod => mod.UserProfileModule)
  },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,

  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserDataComponent} from './user-data/user-data.component';
import {RouteGuardService} from './route-guard.service';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
    canActivate : [RouteGuardService]

  }
  ,
  {
    path: 'users',
    component: UsersComponent,
    canActivate : [RouteGuardService]

  }
  ,
  {
    path: 'users/new',
    component: UserDetailComponent,
    canActivate : [RouteGuardService]
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent,
    canActivate : [RouteGuardService]
    // 2 parameters ( ActivetedRouteSnapshot, state) will be automatically passed to service
  },
  {
    path: 'users/:id',
    component: UserDataComponent,
    canActivate : [RouteGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers : [RouteGuardService],
  exports : [RouterModule]
})
export class RoutingModuleModule { }

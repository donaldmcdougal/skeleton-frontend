import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';
import { AuthGuardAdminService } from './core/services/auth-guard-admin.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: { title: 'Home | Altura' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'account',
    loadChildren: './user/account/account.module#AccountModule',
    data: { title: 'Account | Altura' },
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    data: { title: 'Admin | Altura' },
    canActivate: [AuthGuardAdminService]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: { title: 'Login | Altura' }
  },
  {
    path: 'password-reset-init',
    loadChildren: './user/password-reset-init/password-reset.module#PasswordResetModule'
  },
  {
    path: 'password-reset-finish/:resetKey',
    loadChildren: './user/password-reset-finish/password-reset-finish.module#PasswordResetFinishModule'
  },
  {
    path: 'activate/:activationKey',
    loadChildren: './user/activate/activate.module#ActivateModule'
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
    data: { title: 'Page Not Found | Altura' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

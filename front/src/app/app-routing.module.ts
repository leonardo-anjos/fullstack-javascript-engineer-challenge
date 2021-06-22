import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { AddUserTypeComponent } from './screens/user-type/add-user-type/add-user-type.component';
import { ListUserTypeComponent } from './screens/user-type/list-user-type/list-user-type.component';
import { AddUserComponent } from './screens/user/add-user/add-user.component';
import { EditUserComponent } from './screens/user/edit-user/edit-user.component';
import { ListUserComponent } from './screens/user/list-user/list-user.component';
import { RemoveUserComponent } from './screens/user/remove-user/remove-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: HomeComponent },

  { path: 'user-type/list', component: ListUserTypeComponent },
  { path: 'user-type/add', component: AddUserTypeComponent },

  { path: 'user/list', component: ListUserComponent },
  { path: 'user/add', component: AddUserComponent },
  { path: 'user/:id/edit', component: EditUserComponent },
  { path: 'user/:id/remove', component: RemoveUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { AddUserComponent } from './screens/user/add-user/add-user.component';
import { ListUserComponent } from './screens/user/list-user/list-user.component';
import { EditUserComponent } from './screens/user/edit-user/edit-user.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  // { path: '', component: LoginComponent }
  { path: '', component: ListUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

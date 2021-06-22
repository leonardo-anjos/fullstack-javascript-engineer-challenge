import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/interceptor';
import { MaterialModule } from './core/material.module';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { NavComponent } from './screens/nav/nav.component';
import { AddUserTypeComponent } from './screens/user-type/add-user-type/add-user-type.component';
import { AddUserComponent } from './screens/user/add-user/add-user.component';
import { EditUserComponent } from './screens/user/edit-user/edit-user.component';
import { ListUserComponent } from './screens/user/list-user/list-user.component';
import { UserTypeService } from './service/user-type.service';
import { UserService } from './service/user.service';
import { RemoveUserComponent } from './screens/user/remove-user/remove-user.component';
import { ListUserTypeComponent } from './screens/user-type/list-user-type/list-user-type.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserTypeComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    RemoveUserComponent,
    ListUserTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    UserService,
    UserTypeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

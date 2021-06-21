import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/interceptor';
import { LoginComponent } from './screens/login/login.component';
import { AddUserTypeComponent } from './screens/user-type/add-user-type/add-user-type.component';
import { AddUserComponent } from './screens/user/add-user/add-user.component';
import { EditUserComponent } from './screens/user/edit-user/edit-user.component';
import { ListUserComponent } from './screens/user/list-user/list-user.component';
import { UserTypeService } from './service/user-type.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserTypeComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
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

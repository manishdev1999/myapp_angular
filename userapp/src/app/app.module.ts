import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userlist/userdetails/userdetails.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { data } from 'src/app/app.services';
import { FormsModule } from '@angular/forms';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.service';

const routes: Routes = [
  { path: 'useradd', component: UseraddComponent , canActivate : [AuthGuard]},
  { path: 'userlist', component: UserlistComponent, canActivate : [AuthGuard] },
  { path: 'userdetail', component: UserdetailsComponent, canActivate : [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorpageComponent}
];

@NgModule({
  
  declarations: [
    AppComponent,
    UseraddComponent,
    UserlistComponent,
    UserdetailsComponent,
    ErrorpageComponent,
    NavigationComponent,
    PreloaderComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports :[
    RouterModule
  ],
  providers: [
    data,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

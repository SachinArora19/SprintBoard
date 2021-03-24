import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { burndownComponent } from './components/burndown/burndown.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';


const routes: Routes = [{ path: 'welcome', component: MainPageComponent,  children:[
{ path: 'home', component: HomeComponent, pathMatch: 'full' },
{ path: 'aboutus', component: AboutUsComponent, pathMatch: 'full' },
{ path: '',   redirectTo: localStorage.getItem("isLoggedIn")=="true"? '/welcome/dashboard':'/welcome/home', pathMatch: 'full' },

{ path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
{ path: 'burndown', component: burndownComponent, pathMatch: 'full' }
] },
{ path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'signout', component: SignOutComponent },

{ path: '',   redirectTo: localStorage.getItem("isLoggedIn")=="true"? '/welcome/dashboard':'/welcome/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

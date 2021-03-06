import { NewtasksComponent } from './pages/newtasks/newtasks.component';
import { NewlistsComponent } from './pages/newlists/newlists.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'lists', pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'lists', component: HomeComponent },
  {path:'lists/:listId', component: HomeComponent },
  {path:'newlists', component: NewlistsComponent},
  {path:'newtasks', component: NewtasksComponent},
  {path:'lists/:listId/newtasks', component: NewtasksComponent},
  {path:'howto', component: HowToComponent },
  {path:'about', component: AboutComponent },
  {path:'contact', component: ContactComponent },
  {path:'faqs', component: FaqsComponent },
  {path:'signup', component: SignupComponent },
  {path:'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NewlistsComponent } from './pages/newlists/newlists.component';
import { NewtasksComponent } from './pages/newtasks/newtasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowToComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FaqsComponent,
    SignupComponent,
    LoginComponent,
    NewlistsComponent,
    NewtasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

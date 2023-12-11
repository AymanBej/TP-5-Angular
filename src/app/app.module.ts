import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionUserComponent } from './components/action-user/action-user.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionDetailsComponent } from './components/action-details/action-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionUserComponent,
    LandingPageComponent,
    HeaderComponent,
    ActionDetailsComponent,

  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

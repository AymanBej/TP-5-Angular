import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActionUserComponent } from './components/action-user/action-user.component';
import { ActionDetailsComponent } from './components/action-details/action-details.component';

const routes: Routes = [
  { path: 'actions', component: ActionUserComponent },
  { path: '', component: LandingPageComponent },
  { path: 'action-details/:id', component: ActionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

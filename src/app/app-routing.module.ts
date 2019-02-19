import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { PracticeComponent } from './components/practice/practice.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'practice', component: PracticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

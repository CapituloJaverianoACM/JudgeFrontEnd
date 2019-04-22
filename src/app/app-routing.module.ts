import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { LandingComponent } from './components/landing/landing.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { PracticeComponent } from './components/practice/practice.component';
import { ProblemComponent } from './components/problem/problem.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'practice', component: PracticeComponent, canActivate: [AuthGuard] },
  { path: 'problem/:id', component: ProblemComponent },
  { path: 'submissions', component: SubmissionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

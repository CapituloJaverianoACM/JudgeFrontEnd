import { Routes } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';
import { SignupComponent } from '../signup/signup.component';
import { ProblemasComponent } from '../problemas/problemas.component';
import { MySubmissionsComponent } from '../my-submissions/my-submissions.component';
import { ProblemDescriptionComponent } from '../problem-description/problem-description.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'problems', component: ProblemasComponent},
    { path: 'submissions', component: MySubmissionsComponent},
    { path: 'problems/:id', component: ProblemDescriptionComponent },
    { path: '', redirectTo: '/submissions', pathMatch: 'full' }
];